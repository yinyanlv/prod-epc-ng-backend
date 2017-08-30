let config = {
  dbMap: {
    data: 'mongodb://127.0.0.1:27017/prod-epc-ng',
    session: 'mongodb://127.0.0.1:27017/prod-epc-ng-session'
  },
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