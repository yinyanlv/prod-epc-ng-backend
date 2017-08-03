let gu = require('guthrie-js');
let queryModel= require('../../../models/queryModel');
let queryController = new gu.controller.create();

queryController.actions = {
  load: {
    GET: function* (req, res) {

      if (!req.query.brandCode) return res.send({data: null});

      let dataStr = yield queryModel.getList(req.query);

      let data = JSON.parse(dataStr);
      let i = 1;

      data.forEach((item) => {

        item.rowNumber = i++;
      });

      res.send({
        data
      });
    }
  }
};

module.exports = queryController;