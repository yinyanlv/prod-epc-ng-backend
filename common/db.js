let connectDb = require('../core/connectDb');
let config = require('../config');

let db = connectDb(config.dbMap.mongoDb);

module.exports = db;