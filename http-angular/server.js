(function () {
	'user strict';

	var express = require('express'),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		http = require('http'),
		cors = require('cors');

	var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(cors());
	app.set('port', 3000);

	var dbUrl = 'mongodb://localhost/http-angular';
	mongoose.connect(dbUrl);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connnection error...'));
	db.once('open', function callback() {
		console.log('db connection successfully established');
	});

	var Schema = mongoose.Schema;

	var UserSchema = mongoose.Schema({
		gender: String,
	    name: {
	      title: String,
	      first: String,
	      last: String
	    },
	    location: {
	      street: String,
	      city: String,
	      state: String,
	      zip: String
	    },
	    email: String,
	    username: String,
	    password: String,
	    salt: String,
	    md5: String,
	    sha1: String,
	    sha256: String,
	    registered: String,
	    dob: String,
	    phone: String,
	    cell: String,
	    SSN: String,
	    picture: {
	      large: String,
	      medium: String,
	      thumbnail: String
	    },
	    version: String
	});

	var User = mongoose.model('User', UserSchema);



	var data = [
		{'firstName': 'Joe', 'lastName': 'Beutler'},
		{'firstName': 'Mike', 'lastName': 'Beutler'}
	];

	app.get('/users', function (req, res){
		res.status(200).json(data);
	});

	app.post('/users', function (req,res) {
		var newUser = new User({ name: first: "Hackstreet", last: "Boys", title: "The"});
		data.push(req.body);
		res.status(200).send(newUser);
	});

	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
	});

})();