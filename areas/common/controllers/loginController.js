let gu = require('guthrie-js');
let userModel = require('../../../models/userModel');
let loginController = new gu.controller.create();

loginController.actions = {
  index: {
    POST: function*(req, res) {

      let isExists = yield userModel.isExists(req.body.username, req.body.password);

      if (isExists) {

        res.send({
          success: true
        });
      } else {

        res.send({
          success: false,
          needVerifyCode: true,
          message: '用户名或密码错误'
        });
      }
    }
  },

  captcha: {
    GET: function*(req, res) {

      res.send({});
    }
  }
};

module.exports = loginController;