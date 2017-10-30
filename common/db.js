let mongoose = require('mongoose');
let mysql = require('mysql');
let config = require('../config');

function connectMongodb(connectString) {

  let db = mongoose.createConnection(connectString);

  db.on('open', function (err) {

    if (err) console.log(err);

    console.log('mongoose has connected to ' + connectString + '!');
  });

  db.on('error', function (err) {

    console.log(err);
  });

  return db;
}

function connectMysql(connectString) {

  return mysql.createPool(connectString);
}

const mongodbPool = connectMongodb(config.mongodb.dataDb);
const mysqlPool = connectMysql(config.mysql);

module.exports = {
  mongodbPool,
  mysqlPool
};