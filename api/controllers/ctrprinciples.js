var txtPrinciples = require('../../model/principles');
var api = require('./ctrCommon');

var sendJSONresponse = api.sendJSONresponse;

// roles guide
module.exports.intro = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtIntroduction);
};

// EPC
module.exports.epc = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtEpc);
};

// Self-Organization
module.exports.selforg = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtSelforg);
};

// Collaboration
module.exports.collaboration = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtCollaboration);
};

// value-based
module.exports.valuebased = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtValueBased);
};

// timeboxing
module.exports.timeboxing = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtTimeBoxing);
};

// iterative
module.exports.iterative = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtIterative);
};

// versus
module.exports.vs = function (req, res) {
    sendJSONresponse(res, '200', txtPrinciples.txtVs);
};