let gu = require('guthrie-js');
let modelGroupModel= require('../../../models/modelGroupModel');
let modelController = new gu.controller.create();

modelController.actions = {
  getList: {
    GET: function* (req, res) {

      if (!req.query.brandCode) return res.send({data: null});
      if (!req.query.seriesCode) return res.send({data: null});

      let data = yield modelGroupModel.getModelList(req.query);

      res.send({
        data
      });
    }
  }
};

module.exports = modelController;