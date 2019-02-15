var express = require('express');
var bodyParser = require('body-parser');

var pessoa = require('./routes/pessoa');
var sorteio = require('./routes/sorteio');
var app = express();

var mongoose = require('mongoose');
var devDBUrl = 'mongodb://localhost/k121';
var herokuDBUrl = 'mongodb://heroku_9bljt28d:5t6gojlpjred19bdd5o4c9gipu@ds121898.mlab.com:21898/heroku_9bljt28d';
// var mongoDB = process.env.MONGODB_URI || devDBUrl;

mongoose.connect(devDBUrl || herokuDBUrl);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/pessoas', pessoa);
app.use('/sorteio', sorteio);
app.use(express.static(__dirname + '/../frontend'));

var port = 8989;

app.get('*', (req, res) => {
	res.sendFile('index.html', { root: __dirname + '/../frontend' });
});

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});
