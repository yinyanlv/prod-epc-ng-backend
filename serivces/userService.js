let mysqlPool = require('../common/db').mysqlPool;

let userService = {
  isExists(username, password) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT count(account) FROM user WHERE account = ? AND password = ?`, [username, password], (err, result) => {

        if (err) {
          reject(err);
        }

        if (result[0]['count(account)'] < 1) {

          resolve(false);
        } else {

          resolve(true);
        }
      });
    });
  },
  getUserInfo(username){

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT * FROM user WHERE account = ?`, [username], (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result[0]);
      });
    });
  }
};

module.exports = userService;