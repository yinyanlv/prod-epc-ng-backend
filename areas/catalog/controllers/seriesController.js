let gu = require('guthrie-js');
let brandModel= require('../../../models/brandModel');
let seriesController = new gu.controller.create();

seriesController.actions = {
  getList: {
    GET: function* (req, res) {

      let data = yield brandModel.getBrandSeriesList();

      res.send({
        data
      });
    }
  }
};

module.exports = seriesController;