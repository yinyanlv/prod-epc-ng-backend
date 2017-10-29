let Sequelize = require('sequelize');
let sequelize = require('../common/db').sequelize;

let userModel = sequelize.define('user', {
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

    userModel.create({
      username: 'admin',
      password: '111111',
    });
  })
  .catch(() => {
    console.log('userModel create failure!');
  });

module.exports = userModel;

