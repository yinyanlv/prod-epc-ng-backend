let gu = require('guthrie-js');
let userModel = require('../../../models/userModel');
let userInfoController = new gu.controller.create();

userInfoController.actions = {
  index: {
    GET: function* (req, res) {

      let data = yield userModel.getUserInfo(req.query.username);

      res.send({
        data
      });
    }
  }
};

module.exports = userInfoController;