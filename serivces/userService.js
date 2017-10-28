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

                    console.log(user);

                    resolve(user);
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

                    console.log(user);

                    resolve(user);
                })
                .catch((err) => {

                    reject(err);
                });
        });
    }
};

module.exports = userService;