var txtRisk = require('../model/risks');

var txtUnderC = {
     title: "This page is under construction"
 };
 
var renderPage = function (req, res) {
    res.render('underc', txtUnderC);
 };
 
 module.exports.underconst = function (req, res) {
    renderPage(req, res);
};

// roles guide
var renderRoles = function (req, res) {
    res.render('risks/roles', txtRisk.txtRoles);
 };

 module.exports.roles = function (req, res) {
    renderRoles(req, res);
};

// what is the risk
var renderWhat = function (req, res) {
    res.render('risks/what', txtRisk.txtwhat);
};

module.exports.what = function (req, res) {
   renderWhat(req, res); 
};

// Risk management
var renderMgt = function (req, res) {
    res.render('risks/management', txtRisk.txtmanagement);
};

module.exports.management = function (req, res) {
   renderMgt(req, res); 
};

// Risk minimizing
var renderMinimizing = function (req, res) {
    res.render('risks/minimizing', txtRisk.txtminimizing);
};

module.exports.minimizing = function (req, res) {
    renderMinimizing(req, res);
};

// portfolio
var renderPortfolio = function (req, res) {
    res.render('risks/portfolio', txtRisk.txtportfolio);
};

module.exports.portfolio = function (req, res) {
    renderPortfolio(req, res);
};

// summary management
var renderSummary = function (req, res) {
    res.render('risks/summary', txtRisk.txtSummary);
 };

 module.exports.summary = function (req, res) {
    renderSummary(req, res);
};

// vs
var renderVs = function (req, res) {
    res.render('base', txtRisk.txtvs);
 };

 module.exports.vs = function (req, res) {
    renderVs(req, res);
};
