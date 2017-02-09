var mongoose = require( 'mongoose' );

var itemSchema = new mongoose.Schema({
	id: String,
	title: String,
	stitle: String,
	comment: [String],
	image: String
});

mongoose.model('Item', itemSchema);