var mongoose = require( 'mongoose' );

var tableSchema = new mongoose.Schema({
    id: String,
	title: String,
	head: [String],
    body: [[String]],
	image: String
});

mongoose.model('Table', tableSchema);