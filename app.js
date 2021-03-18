var express = require('express');
var path = require ('path');

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