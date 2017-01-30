var request = require('request');

var apiOptions = {
server : "http://localhost:3000"
};

var renderScreen = function (req, res, screen, url) {
	var requestOptions = {
		url : apiOptions.server+'/api'+url,
		method : "GET",
		json : {},
		qs : {}
	};
	request(requestOptions, function(err, response, body) {
		console.log(requestOptions.url);
		res.render(screen, body);
	});
    
 };
 
 exports.apiOptions = apiOptions;
 exports.renderScreen = renderScreen;