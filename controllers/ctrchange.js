var txtChange = require('../model/change');

// Change introduction 
var renderIntro = function (req, res) {
    res.render('base', txtChange.txtIntroduction);
 };

 module.exports.chgIntro = function (req, res) {
    renderIntro(req, res);
};

// Change roles
var renderRoles = function (req, res) {
    res.render('base', txtChange.txtRoles);
 };

 module.exports.chgRoles = function (req, res) {
    renderRoles(req, res);
};

// Change overview
var renderOverview = function (req, res) {
    res.render('changes/overview', txtChange.txtOverview);
 };

 module.exports.chgOverview = function (req, res) {
    renderOverview(req, res);
};

// Change change
var renderChange = function (req, res) {
    res.render('changes/change', txtChange.txtChange);
 };

 module.exports.chgChange = function (req, res) {
    renderChange(req, res);
};

// Change integration
var renderIntegration = function (req, res) {
    res.render('changes/integration', txtChange.txtIntegration);
 };

 module.exports.chgIntegration = function (req, res) {
    renderIntegration(req, res);
};

// Change portfolio
var renderPortfolio = function (req, res) {
    res.render('changes/portfolio', txtChange.txtPortfolio);
 };

 module.exports.chgPortfolio = function (req, res) {
    renderPortfolio(req, res);
};

// Change summary
var renderSummary = function (req, res) {
    res.render('changes/summary', txtChange.txtSummary);
 };

 module.exports.chgSummary = function (req, res) {
    renderSummary(req, res);
};

// Change versus
var renderVersus = function (req, res) {
    res.render('base', txtChange.txtVersus);
 };

 module.exports.chgVersus = function (req, res) {
    renderVersus(req, res);
};