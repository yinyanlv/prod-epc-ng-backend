let gu = require('guthrie-js');
let baseController = new gu.controller.create();

baseController.on('actionExecuting', function(req, res, next) {

  next();
});

module.exports = baseController;