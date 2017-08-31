let gu = require('guthrie-js');
let baseController = require('../../../common/baseController');
let logoutController = new gu.controller.inherit(baseController);

logoutController.actions = {
  index: {
    GET: (req, res) => {

      req.session.destroy((err) => {

        if (err) {

          return res.send({
            success: false,
            message: '退出登录失败'
          });
        }

        res.send({
          success: true,
          message: '退出登录成功'
        });
      });
    }
  }
};

module.exports = logoutController;