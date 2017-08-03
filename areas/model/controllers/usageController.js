let gu = require('guthrie-js');
let usageModel= require('../../../models/usageModel');
let usageController = new gu.controller.create();

usageController.actions = {
  getList: {
    GET: function* (req, res) {

      let data = yield usageModel.getUsageList(req.query);

      res.send({
        data
      });
    }
  }
};

module.exports = usageController;