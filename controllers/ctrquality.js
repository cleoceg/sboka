var txtQuality = require('../model/quality');

// Quality introduction 
var renderIntro = function (req, res) {
    res.render('base', txtQuality.txtIntroduction);
 };

 module.exports.qualintro = function (req, res) {
    renderIntro(req, res);
};

// Quality roles 
var renderRoles = function (req, res) {
    res.render('base', txtQuality.txtRoles);
 };

 module.exports.qualroles = function (req, res) {
    renderRoles(req, res);
};

// Quality defined 
var renderDefined = function (req, res) {
    res.render('quality/defined', txtQuality.txtDefined);
 };

 module.exports.qualdefined = function (req, res) {
    renderDefined(req, res);
};

// Quality acceptance criteria 
var renderCriteria = function (req, res) {
    res.render('quality/acceptance', txtQuality.txtAcceptance);
 };

 module.exports.qualacceptance = function (req, res) {
    renderCriteria(req, res);
};

// Quality management
var renderManagement = function (req, res) {
    res.render('quality/management', txtQuality.txtManagement);
 };

 module.exports.qualmanagement = function (req, res) {
    renderManagement(req, res);
};

// Quality summary
var renderSummary = function (req, res) {
    res.render('quality/summary', txtQuality.txtSummary);
 };

 module.exports.qualsummary = function (req, res) {
    renderSummary(req, res);
};

// Quality versus
var renderVersus = function (req, res) {
    res.render('base', txtQuality.txtVs);
 };

 module.exports.qualvs = function (req, res) {
    renderVersus(req, res);
};