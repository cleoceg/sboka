var mongoose = require( 'mongoose' );

var stepSchema = new mongoose.Schema({
        id: String,
	step: String,
	url: String,
	introduction: String,
	introbis: [String]
});

mongoose.model('Step', stepSchema);