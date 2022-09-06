const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const routes = require('./routes');

//const {errorConverter, errorHandler} = require('./middleware/error');

require('dotenv').config();

// set port, listen for requests
const PORT = process.env.PORT;

const corsOptions = {
  origin: `http://localhost:${PORT}`,
};

// For the UI
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors(corsOptions));

app.use('/', routes);

// For Error handling
app.use(function(err, req, res, next) {
  console.log('We have hit an error...');
  console.log(err);
  console.error(err.name);
  console.log(err.message);
  res.status(500);
  res.render('error', {'error': err});
});

app.listen(PORT, () => {
  console.log(`Deployment App is running on port ${PORT}.`);
});
