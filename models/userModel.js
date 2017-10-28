let Sequelize = require('sequelize');
let sequelize = require('../common/db').sequelize;

let userModel = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

userModel
    .sync()
    .then(() => {
        console.log('userModel create success!');
    })
    .catch(() => {
        console.log('userModel create failure!');
    });

module.exports = userModel;

