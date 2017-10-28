let gu = require('guthrie-js');
let svgCaptcha = require('svg-captcha');
let baseController = require('../../../common/baseController');
let loginController = new gu.controller.inherit(baseController);
let userService = require('../../../serivces/userService');

loginController.actions = {
  index: {
    POST: function*(req, res) {

      if (!req.session.loginErrorCount) req.session.loginErrorCount = 0;

      if (req.body.verifyCode && req.session.captchaText !== req.body.verifyCode.toLowerCase()) {

        req.session.loginErrorCount++;

        let data = {
          success: false,
          message: '验证码不正确',
          needVerifyCode: true
        };

        res.send(data);

        return;
      }

      let isExists = yield userService.isExists(req.body.username, req.body.password);

      if (isExists) {

        req.session.loginErrorCount = 0;
        req.session.userInfo = yield userService.getUserInfo(req.body.username);

        res.send({
          success: true,
          userInfo: JSON.parse(req.session.userInfo)
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
    GET: (req, res) => {

      let captcha = svgCaptcha.create();

      req.session.captchaText = captcha.text.toLowerCase();

      res.type('svg');
      res.send(captcha.data);
    }
  }
};

module.exports = loginController;