let config = {
    mongodb: {
        dataDb: 'mongodb://127.0.0.1:27017/prod-epc-ng',
        sessionDb: 'mongodb://127.0.0.1:27017/prod-epc-ng-session'
    },
    mysql: 'mysql://root:111111@localhost:3306/prod_epc_ng',
    session: {
        secret: 'prod_epc_ng',
        name: 'uid',
        rolling: true,
        cookie: {
            maxAge: 1000 * 3600 * 8
        },
        resave: false,
        saveUninitialized: true
    }
};

module.exports = config;