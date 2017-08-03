let gu = require('guthrie-js');
let modelModel= require('../../../models/modelModel');
let crumbsController = new gu.controller.create();

crumbsController.actions = {
  load: {
    GET: function* (req, res) {

      if (!req.query.brandCode) return res.send({data: null});

      let data = yield modelModel.getCrumbs(req.query);

      res.send({
        data
      });
    }
  }
};

module.exports = crumbsController;