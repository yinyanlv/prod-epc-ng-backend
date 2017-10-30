let mysqlPool = require('../common/db').mysqlPool;

let catalogService = {
  getGrade1(req) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT code, name_zh as name FROM catalog_grade_1`, (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  },

  getGrade2(req, parentCode) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT code, name_zh as name FROM catalog_grade_2 WHERE parent_code = ?`, [parentCode], (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  },

  getGrade3(req, parentCode) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT code, name_zh as name FROM catalog_grade_3 WHERE parent_code = ?`, [parentCode], (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  },

  getGrade4(req, parentCode) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT code, name_zh as name FROM catalog_grade_4 WHERE parent_code = ?`, [parentCode], (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  },

  getGrade5(req, parentCode) {

    return new Promise((resolve, reject) => {

      mysqlPool.query(`SELECT code, name_zh as name FROM catalog_grade_5 WHERE parent_code = ?`, [parentCode], (err, result) => {

        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
};

module.exports = catalogService;