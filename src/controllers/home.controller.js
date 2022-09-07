const shelljs = require('shelljs');

exports.home = function(req, res, next) {
  return res.render('home');
};

exports.deploy = async function(req, res) {
  const deployLocation = req.body.deploymentType;
  const shellResult = shelljs.exec(`./deploy_app.sh ${deployLocation}`);
  console.log(shellResult.code);
  console.log(shellResult.stdout);
  if (shellResult.stderr) {
    console.log('Error attempting to deploy the app.');
    return res.json({error: shellResult.stderr});
  }
  console.log('Succesfully deployed!');
  return res.json({success: true});
}