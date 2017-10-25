let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let cors = require('cors');
let bodyParser = require('body-parser');
let compression = require('compression');
let gu = require('guthrie-js');
let routesMap = require('./routes/routesMap');
let config = require('./config');

let app = express();

require('./common/db');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({  // 允许跨域访问
  origin: ['http://localhost:4200'],  // 客户端withCredentials为true时，服务器端allow origin，必须是一个具体的域名列表，不能为*
  credentials: true  // 解决ajax跨域时，session在各请求间不共享，总是新建一条的问题
}));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session(Object.assign(config.session, {
  store: new MongoStore({url: config.mongodb.sessionDb})
})));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

let router = new gu.Router(app, __dirname);

routesMap(router);

app.use(function (err, req, res) {  // error handler

  console.log(err);

  if (req.session.userInfo) {

    res.send({
      success: false,
      message: '会话过期',
      referrer: req.url
    });
  } else {

    res.render('home/index');
  }
});

module.exports = app;
