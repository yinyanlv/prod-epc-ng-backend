let mongoose = require('mongoose');
let db = require('../common/db');
let queryDbModel = db.model('query', new mongoose.Schema(), 'query');

let queryModel = {

  getList(params) {

    return new Promise((resolve, reject) => {

      queryDbModel.find(params, {
        '_id': 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.stringify(docs));
      });
    });
  }
};

module.exports = queryModel;

