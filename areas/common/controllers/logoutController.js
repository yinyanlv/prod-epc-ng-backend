let gu = require('guthrie-js');
let logoutController = new gu.controller.create();

logoutController.actions = {
  index: {
    GET: function (req, res) {
      
    }
  }
};

module.exports = logoutController;