let mongoose = require('mongoose');
let db = require('../common/db');
let groupDbModel = db.model('group', new mongoose.Schema(), 'group');

let groupModel = {

  getGroupList() {

    return new Promise((resolve, reject) => {

      groupDbModel.find({}, {
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

module.exports = groupModel;

