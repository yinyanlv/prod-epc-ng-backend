let gu = require('guthrie-js');
let groupModel= require('../../../models/groupModel');
let groupController = new gu.controller.create();

groupController.actions = {
  getList: {
    GET: function* (req, res) {

      let data = yield groupModel.getGroupList();

      res.send({
        data
      });
    }
  }
};

module.exports = groupController;