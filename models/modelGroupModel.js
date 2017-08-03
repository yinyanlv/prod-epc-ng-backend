let mongoose = require('mongoose');
let db = require('../common/db');
let modelGroupDbModel = db.model('modelGroup', new mongoose.Schema(), 'modelGroup');

let modelGroupModel = {

  getModelList(params) {

    return new Promise((resolve, reject) => {

      modelGroupDbModel.find(params, {
        '_id': 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  }
};

module.exports = modelGroupModel;

