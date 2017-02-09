var mongoose = require( 'mongoose' );
//var gracefulShutdown;
var dbURI = 'mongodb://localhost/SBOKA';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

require('./itemschema');
require('./stepschema');
require('./procschema');
require('./tableschema');