var txtChg = require('../../model/change');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Change Intro
module.exports.chgIntro = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtIntroduction);
};

// Change Roles
module.exports.chgRoles = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtRoles);
};

// Change Overview
module.exports.chgOverview = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtOverview);
};

// Change Change in Scrum
module.exports.chgChange = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtChange);
};

// Change Integration
module.exports.chgIntegration = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtIntegration);
};

// Change Portfolio
module.exports.chgPortfolio = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtPortfolio);
};

// Change Summary
module.exports.chgSummary = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtSummary);
};

// Change Versus
module.exports.chgVersus = function (req, res) {
    sendJSONresponse(res, '200', txtChg.txtVersus);
};