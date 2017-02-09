var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

exports.sendJSONresponse = sendJSONresponse;

var myRequest = function(req, res, mong) {
    
    Item
        .findOne({'id':mong})
        .exec(function(err, item) {
            sendJSONresponse(res, '200', item);    
    });
}

exports.myRequest = myRequest;