const express = require('express');

const bodyParser = require('body-parser');

const passport = require('passport');

const cookieParser = require('cookie-parser');

const routes = require('./routes');

const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const controller = require('./routes/controller');


const app = express();


app.set('view engine', 'pug');
app.set('views', __dirname);
app.locals.basedir = __dirname;

app.on('mount', server => {
  app.database = server.database;
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'sdsddsddsecrdsdsset',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({url: 'mongodb://localhost/AsiaOpt'}),
  cookie:{
    maxAge: 60 * 60 * 1000,
    httpOnly: true
  },
}));
const pass_config = require('./pass-config.js');
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);


module.exports = app;
