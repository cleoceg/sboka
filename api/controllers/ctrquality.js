var txtQual = require('../../model/quality');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Quality Intro
module.exports.qualIntro = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtIntroduction);
};

// Quality roles
module.exports.qualRoles = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtRoles);
};

// Quality defined
module.exports.qualDefined = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtDefined);
};

// Quality Acceptance
module.exports.qualAcceptance = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtAcceptance);
};

// Quality Management
module.exports.qualManagement = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtManagement);
};

// Quality Summary
module.exports.qualSummary = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtSummary);
};

// Quality Versus
module.exports.qualVs = function (req, res) {
    sendJSONresponse(res, '200', txtQual.txtVs);
};