let mongoose = require('mongoose');
let db = require('../common/db');
let userDbModel = db.model('user', new mongoose.Schema(), 'user');

let userModel = {

  isExists(username, password) {

    return new Promise((resolve, reject) => {

      userDbModel.find({
        username,
        password
      }, {
        '_id': 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        if (docs.length === 0) {
          resolve(false);
          return;
        }

        resolve(true);
      });
    });
  },

  getUserInfo(username) {

    return new Promise((resolve, reject) => {

      userDbModel.find({
        username
      }, {
        '_id': 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.stringify(docs[0]));
      });
    });
  }
};

module.exports = userModel;

