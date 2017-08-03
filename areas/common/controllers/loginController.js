let gu = require('guthrie-js');
let userModel = require('../../../models/userModel');
let loginController = new gu.controller.create();

loginController.actions = {
  index: {
    POST: function* (req, res) {

      let isExists = yield userModel.isExists(req.body.username, req.body.password);

      res.send({
        data: {
          success: isExists
        }
      });
    }
  }
};

module.exports = loginController;