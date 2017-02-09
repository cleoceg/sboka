var mongoose = require( 'mongoose' );

var procSchema = new mongoose.Schema({
    id: String,
	phase: String,
	title: String,
	introduction: String,
	input: [String],
    tools: [String],
    output: [String]
});

mongoose.model('Proc', procSchema);