var txtRisks = require('../../model/risks');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Risks Roles
module.exports.riskRoles = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtRoles);
};

// Risks What
module.exports.riskWhat = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtwhat);
};

// Risks Management
module.exports.riskMgt = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtmanagement);
};

// Risks Minimizing
module.exports.riskMini = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtminimizing);
};

// Risks Portfolio & program
module.exports.riskPortfolio = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtPortfolio);
};

// Risks Summary
module.exports.riskSummary = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtSummary);
};

// Risks Versus
module.exports.riskVs = function (req, res) {
    sendJSONresponse(res, '200', txtRisks.txtvs);
};