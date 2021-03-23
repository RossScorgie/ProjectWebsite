var express = require('express');
var path = require ('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo');

//db connect
mongoose.connect('mongodb+srv://Admin:Admin@firstcluster.hqarp.mongodb.net/projectsite?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

//Init
var app = express();

//Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Public folder setup
app.use(express.static('public'));

//Body parser for urlencoded and json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Express session
app.use(session({
  secret: 'drink',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://Admin:Admin@firstcluster.hqarp.mongodb.net/projectsite?retryWrites=true&w=majority',
    dbName: 'projectsite'
  }),
  cookie: { secure: true }
}))

//Express messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Setting Routes
var pages = require('./routes/pages.js');
var user = require('./models/user.js');
var votes = require('./models/test.js');
var index = require('./routes/index');

app.use('/', index);
app.use('/', pages);

//Adding clicks to db
app.post('/teaClick', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('tea').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});

app.post('/coffeeClick', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('coffee').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});

app.post('/chocoClick', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('chocolate').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});

//Server start
var port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});