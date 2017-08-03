let mongoose = require('mongoose');
let db = require('../common/db');
let modelDbModel = db.model('model', new mongoose.Schema(), 'model');

let modelModel = {

  getCrumbs(params) {

    let resultConfig = {
      '_id': 0
    };

    if (params.brandCode) {
      resultConfig.brandCode = 1;
      resultConfig.brandName = 1;
    }

    if (params.seriesCode) {
      resultConfig.seriesCode = 1;
      resultConfig.seriesName = 1;
    }

    if (params.modelGroupCode) {
      resultConfig.modelGroupCode = 1;
      resultConfig.modelGroupName = 1;
    }

    if (params.modelCode) {
      resultConfig.modelCode = 1;
      resultConfig.modelName = 1;
    }

    return new Promise((resolve, reject) => {

      modelDbModel.find(params, resultConfig, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs[0]);
      });
    });
  }
};

module.exports = modelModel;

