let connectDb = require('./connectDb');
let config = require('../config');

let db = connectDb(config.dbMap.data);

module.exports = db;