const express = require('express');

const bodyParser = require('body-parser');

const Database = require('./database');

const database = new Database('mongodb://localhost:27017');

database.connect('AsiaOpt')
.then(()=> console.log("Подключение к бд успешно!"));

const app = require('./app');

const server = express();

server.database = database;

server.use(express.static('public'));
server.use('/lib', express.static('node_modules'));
server.use(bodyParser.json());
server.use(bodyParser({limit: '5mb'}));
server.use(app);

server.listen(3000, 'localhost', () => console.log("Сервер запущен"));
