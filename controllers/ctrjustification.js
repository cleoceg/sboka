var api = require('./ctrCommon') ;

var apiOptions = api.apiOptions;
var renderScreen = api.renderScreen;

var referral = {
	intro: ['base','/bj_intro'],
	role: ['base','/bj_role'],
	vdd: ['bj/vdd','/bj_vdd'],
	importance: ['bj/importance', '/bj_importance'],
	technique: ['bj/technique', '/bj_technique'],
	continuous: ['bj/continuous', '/bj_continuous'],
	benefits: ['bj/benefits', '/bj_benefits'],
	summary: ['bj/summary', '/bj_summary'],
	vs: ['base', '/bj_vs']
};

// Business Justification Intro
module.exports.bjIntro = function (req, res) {
    renderScreen(req, res, referral.intro[0], referral.intro[1]);
};

// Business Justification Role
module.exports.bjRole = function (req, res) {
    renderScreen(req, res, referral.role[0], referral.role[1]);
};

// Business Justification VDD
module.exports.bjVdd = function (req, res) {
    renderScreen(req, res, referral.vdd[0], referral.vdd[1]);
};

// Business Justification importance
module.exports.bjImportance = function (req, res) {
    renderScreen(req, res, referral.importance[0], referral.importance[1]);
};

// Business Justification technique
module.exports.bjTechnique = function (req, res) {
    renderScreen(req, res, referral.technique[0], referral.technique[1]);
};

// Business Justification Continuous Value
module.exports.bjContinuous = function (req, res) {
    renderScreen(req, res, referral.continuous[0], referral.continuous[1]);
};

// Business Justification Benefits realization
module.exports.bjBenefits = function (req, res) {
    renderScreen(req, res, referral.benefits[0], referral.benefits[1]);
};

// Business Justification summary
module.exports.bjSummary = function (req, res) {
    renderScreen(req, res, referral.summary[0], referral.summary[1]);
};

// Business Justification versus
module.exports.bjVersus = function (req, res) {
    renderScreen(req, res, referral.vs[0], referral.vs[1]);
};