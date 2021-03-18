var express = require('express');
var path = require ('path');
const mongoose = require('mongoose');

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
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('working');
});

//Server start
var port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
});