let mongoose = require('mongoose');
let db = require('../common/db');
let usageDbModel = db.model('usage', new mongoose.Schema(), 'usage');

let usageModel = {

  getUsageList(params) {

    return new Promise((resolve, reject) => {

      usageDbModel.find(params, {
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

module.exports = usageModel;

