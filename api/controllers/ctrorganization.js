var txtOrganization = require('../../model/organization');
var api = require('./ctrCommon');

var sendJSONresponse = api.sendJSONresponse;

// Organization Intro
module.exports.orgIntro = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtIntro);
};

// Organization Roles guide
module.exports.orgRoles = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtRoles);
};

// Organization Project Roles
module.exports.orgProject = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtProject);
};

// Organization Product Owner
module.exports.orgOwner = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtOwner);
};

// Organization Scrum Master
module.exports.orgMaster = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtMaster);
};

// Organization Scrum Team
module.exports.orgTeam = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtTeam);
};

// Organization Portfolio
module.exports.orgPortfolio = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtPortfolio);
};

// Organization Summary
module.exports.orgSummary = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtSummary);
};

// Organization Versus
module.exports.orgVersus = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtVersus);
};

// Organization HT theories
module.exports.orgTheories = function (req, res) {
    sendJSONresponse(res, '200', txtOrganization.txtTheories);
};