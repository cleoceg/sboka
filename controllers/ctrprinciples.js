var api = require('./ctrCommon') ;

var apiOptions = api.apiOptions;
var renderScreen = api.renderScreen;

var referral = {
	intro: ['base','/prin_intro'],
	epc: ['principles/epc','/prin_epc'],
	org: ['principles/selforg','/prin_selforg'],
	collab: ['principles/collab', '/prin_collab'],
	vb: ['principles/valuebased', '/prin_vb'],
	timebox: ['principles/timeboxing', '/prin_timebox'],
	iter: ['principles/iterative', '/prin_iterative'],
	vs: ['base', '/prin_vs']
};

// Introduction
 module.exports.intro = function (req, res) {
    renderScreen(req, res, referral.intro[0], referral.intro[1]);
};

//EPC
module.exports.epc = function (req, res) {
    //renderEpc(req, res);
	renderScreen(req, res, referral.epc[0], referral.epc[1]);
};

// Self-Organization
module.exports.selforg = function (req, res) {
	renderScreen(req, res, referral.org[0], referral.org[1]);
};

// Collaboration
module.exports.collaboration = function (req, res) {
	renderScreen(req, res, referral.collab[0], referral.collab[1]);
};

// value-based
module.exports.valuebased = function (req, res) {
	renderScreen(req, res, referral.vb[0], referral.vb[1]);
};

// timeboxing
module.exports.timeboxing = function (req, res) {
    renderScreen(req, res, referral.timebox[0], referral.timebox[1]);
};

// iterative
module.exports.iterative = function (req, res) {
    renderScreen(req, res, referral.iter[0], referral.iter[1]);
};

// versus
module.exports.vs = function (req, res) {
    renderScreen(req, res, referral.vs[0], referral.vs[1]);
};