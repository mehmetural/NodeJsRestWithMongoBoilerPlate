var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.port || 3000;

var mongoose = require('mongoose');
//var db = mongoose.connect('<MongoDbUrl>');

var UserRepository = require('./repositories/userRepository');
var UserService = require('./services/userService');


   
var _userRepository = new UserRepository(db);
var _userService = new UserService(_userRepository);

app.get("/", function (request, response) {
    response.send('RUComing is up & running.. ?? gerçekten');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function (arg) {
    console.log('rucoming service has started on port: ' + port);
});


require('./sources/sessionSource.js')(app, _userService);
require('./sources/userSource.js')(app, _userService);  
