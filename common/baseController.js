let gu = require('guthrie-js');
let baseController = new gu.controller.create();

let doNotNeedValidUrls = ['/login'];

baseController.on('actionExecuting', function(req, res, next) {

  if (doNotNeedValidUrls.includes(req.url)) {

    return next();
  }

  if (req.session.userInfo) {

    return next();
  }
});

module.exports = baseController;