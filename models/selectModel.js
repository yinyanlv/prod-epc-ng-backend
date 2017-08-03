let mongoose = require('mongoose');
let db = require('../common/db');

let selectModel = {

  getByCollectionName(collectionName) {

    let curDbModel = db.model(collectionName, new mongoose.Schema(), collectionName);

    return new Promise((resolve, reject) => {

      curDbModel.find({}, {
        _id: 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.stringify(docs));
      });
    });
  },

  getByCollectionNameWithQuery(collectionName, params, resultConfig) {

    let curDbModel = db.model(collectionName, new mongoose.Schema(), collectionName);

    if (!resultConfig) {
      resultConfig = {};
    }

    return new Promise((resolve, reject) => {

      curDbModel.find(params, {
        _id: 0
      }, resultConfig, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.stringify(docs));
      });
    });
  }
};

module.exports = selectModel;

