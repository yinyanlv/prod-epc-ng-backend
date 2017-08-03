let mongoose = require('mongoose');
let db = require('../common/db');
let brandDbModel = db.model('brand', new mongoose.Schema(), 'brand');

let brandModel = {

  getBrandSeriesList() {

    return new Promise((resolve, reject) => {

      brandDbModel.find({
      }, {
        _id: 0
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

module.exports = brandModel;

