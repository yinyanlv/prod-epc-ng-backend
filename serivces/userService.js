let userModel = require('../models/userModel');

let userService = {
  isExists(username, password) {

    return new Promise((resolve, reject) => {

      userModel
        .findOne({
          where: {
            username,
            password
          }
        })
        .then((user) => {

          return user ? resolve(true) : resolve(false);
        })
        .catch((err) => {

          reject(err);
        });
    });
  },
  getUserInfo(username) {

    return new Promise((resolve, reject) => {

      userModel
        .findOne({
          where: {
            username
          }
        })
        .then((user) => {

          resolve(user.dataValues);
        })
        .catch((err) => {

          reject(err);
        });
    });
  }
};

module.exports = userService;