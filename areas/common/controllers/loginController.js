let gu = require('guthrie-js');
let svgCaptcha = require('svg-captcha');
let userModel = require('../../../models/userModel');
let loginController = new gu.controller.create();

loginController.actions = {
  index: {
    POST: function*(req, res) {

      if (!req.session.loginErrorCount) req.session.loginErrorCount = 0;

      console.log('*******');
      console.log(req.session);
      console.log(req.session.loginErrorCount);
      console.log(req.session.captchaText);
      console.log(req.body.verifyCode);
      if (req.body.verifyCode && req.session.captchaText !== req.body.verifyCode) {

        req.session.loginErrorCount++;

        let data = {
          success: false,
          message: '验证码不正确',
          needVerifyCode: true
        };

        res.send(data);

        return;
      }

      let isExists = yield userModel.isExists(req.body.username, req.body.password);

      if (isExists) {

        req.session.loginErrorCount = 0;
        res.send({
          success: true
        });
      } else {

        req.session.loginErrorCount++;

        let data = {
          success: false,
          message: '用户名或密码错误'
        };

        if (req.session.loginErrorCount >= 3) {
          data.needVerifyCode = true;
        }

        res.send(data);
      }
    }
  },

  captcha: {
    GET: function(req, res) {

      let captcha = svgCaptcha.create();

      req.session.captchaText = captcha.text;

      console.log(req.session.captchaText);

      res.type('svg');
      res.send(captcha.data);
    }
  }
};


module.exports = loginController;