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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 允许跨域访问
app.use(cors({
  origin: ['http://localhost:4200'],  // 客户端withCredentials为true时，服务器端allow origin，必须是一个具体的域名列表，不能为*
  credentials: true  // 解决ajax跨域时，session在各请求间不共享，总是新建一条的问题
}));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session(Object.assign(config.session, {
  store: new MongoStore({url: config.dbMap.session})
})));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

let router = new gu.Router(app, __dirname);

routesMap(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {

  let err = new Error('Not Found');
  err.status = 404;

  next(err);
});

// error handler
app.use(function (err, req, res, next) {

  console.log(err);

  res.render('master/index');
});

module.exports = app;
