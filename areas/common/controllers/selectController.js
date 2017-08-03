let gu = require('guthrie-js');
let selectModel = require('../../../models/selectModel');
let selectController = new gu.controller.create();
let selectMapping = require('../../../mapping/selectMapping');
let brandMapping = require('../../../mapping/brandMapping');
let seriesMapping = require('../../../mapping/seriesMapping');
let modelGroupMapping = require('../../../mapping/modelGroupMapping');
let modelMapping = require('../../../mapping/modelMapping');

selectController.actions = {
  load: {
    GET: function* (req, res) {

      let collectionName = req.params.id;
      let data = yield selectModel.getByCollectionName(collectionName);

      let temp = JSON.parse(data);
      data = selectMapping(temp);

      res.send({
        data
      });
    }
  },
  loadWithQuery: {
    GET: function* (req, res) {

      let collectionName = req.params.id;
      let resultConfig;
      let data;
      let temp;

      switch (collectionName) {
        case 'brand':

            resultConfig = {
              _id: 0,
              brandCode: 1,
              brandName: 1
            };
            data = yield selectModel.getByCollectionNameWithQuery(collectionName, req.query, resultConfig);
            temp = JSON.parse(data);
            data = brandMapping(temp);
          break;
        case 'series':

            resultConfig = {
              _id: 0,
              seriesCode: 1,
              seriesName: 1
            };
            data = yield selectModel.getByCollectionNameWithQuery(collectionName, req.query, resultConfig);
            temp = JSON.parse(data);
            data = seriesMapping(temp);
          break;
        case 'modelGroup':

            resultConfig = {
              _id: 0,
              modelGroupCode: 1,
              modelGroupName: 1
            };
            data = yield selectModel.getByCollectionNameWithQuery(collectionName, req.query, resultConfig);
            temp = JSON.parse(data);
            data = modelGroupMapping(temp);
          break;
        case 'model':

            resultConfig = {
              _id: 0,
              modelCode: 1,
              modelName: 1
            };
            data = yield selectModel.getByCollectionNameWithQuery(collectionName, req.query, resultConfig);
            temp = JSON.parse(data);
            data = modelMapping(temp);
          break;
        default:
      }

      data.unshift({
        label: '请选择',
        value: ''
      });

      res.send({
        data
      });
    }
  }
};

module.exports = selectController;