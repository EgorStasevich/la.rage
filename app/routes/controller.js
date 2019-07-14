const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const moment = require('moment');
moment.locale('ru');
const passport = require('passport');
const {
  ObjectID
} = require('mongodb');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
module.exports = {

  // ** ПОЛУЧЕНИЕ КОЛЛЕКЦИИ ИЗ БАЗЫ ДАННЫХ ** \\
  getCollection: (req, res, next) => {
    req.Items = req.app.database.collection('Items'); // коллекция с товарами
    req.Orders = req.app.database.collection('Orders'); //коллекция с заказами
    req.Clients = req.app.database.collection('Clients'); //коллекция с клиентами
    req.ConfirmOrders = req.app.database.collection('ConfirmOrders');
    req.doneOrders = req.app.database.collection('doneOrders');
    req.ClientsBlackList = req.app.database.collection('ClientsBlackList');
    req.MainImages = req.app.database.collection('Images');
    next(); //передача управления следущей функции в стеке
  },

 
  // ** GET запрос на главную страницу ** \\
  showIndex: (req, res) => {
    res.render('routes/views/index'); 
  },
  showAbout: (req, res) => {
    res.render('routes/views/about'); 
  },
  showContact: (req, res) => {
    res.render('routes/views/contact'); 
  },
  showPortfolio: (req, res) => {
    res.render('routes/views/portfolio'); 
  },
  showResume: (req, res) => {
    res.render('routes/views/resume'); 
  },
  showAdmin: (req, res) => {
    res.render('routes/views/admin'); 
  },
}
