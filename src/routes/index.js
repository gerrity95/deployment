const express = require('express');
const homeRouter = require('./home.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: homeRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
