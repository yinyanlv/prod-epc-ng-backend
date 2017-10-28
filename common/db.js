let mongoose = require('mongoose');
let Sequelize = require('sequelize');
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

    return new Sequelize(connectString)
        .authenticate()
        .then(() => {

            console.log('sequelize has connected to ' + connectString + '!');
        })
        .catch((err) => {

            console.log(err);
        });
}

const mongodbPool = connectMongodb(config.mongodb.dataDb);
const sequelize = connectMysql(config.mysql);

module.exports = {
    mongodbPool,
    sequelize
};