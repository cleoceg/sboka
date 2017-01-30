var api = require('./ctrCommon') ;

var apiOptions = api.apiOptions;
var renderScreen = api.renderScreen;

// couple Screen - Route
var referral = {
	intro: ['base','/org_intro'],
	roles: ['base','/org_roles'],
	project: ['org/project','/org_project'],
	owner: ['org/owner','/org_owner'],
	master: ['org/master','/org_master'],
	team: ['org/team','/org_team'],
	portfolio: ['org/portfolio','/org_portfolio'],
	sum: ['org/summary','/org_sum'],
	vs: ['base','/org_vs'],
	theories: ['org/theories','/org_theories']
};

// Organization Intro
module.exports.orgIntro = function (req, res) {
    renderScreen(req, res, referral.intro[0], referral.intro[1]);
	//res.render(referral.intro[0]);
};

// Organization Roles guide
module.exports.orgRoles = function (req, res) {
    renderScreen(req, res, referral.roles[0], referral.roles[1]);
};

// Organization Project Roles
module.exports.orgProject = function (req, res) {
    renderScreen(req, res, referral.project[0], referral.project[1]);
};

// Organization Product Owner
module.exports.orgOwner = function (req, res) {
    renderScreen(req, res, referral.owner[0], referral.owner[1]);
};

// Organization Scrum Master
module.exports.orgMaster = function (req, res) {
    renderScreen(req, res, referral.master[0], referral.master[1]);
};

// Organization Scrum Team
module.exports.orgTeam = function (req, res) {
    renderScreen(req, res, referral.team[0], referral.team[1]);
};

// Organization Portfolio
module.exports.orgPortfolio = function (req, res) {
    renderScreen(req, res, referral.portfolio[0], referral.portfolio[1]);
};

// Organization Summary
module.exports.orgSummary = function (req, res) {
    renderScreen(req, res, referral.sum[0], referral.sum[1]);
};

// Organization Versus
module.exports.orgVersus = function (req, res) {
    renderScreen(req, res, referral.vs[0], referral.vs[1]);
};

// Organization HT theories
module.exports.orgTheories = function (req, res) {
    renderScreen(req, res, referral.theories[0], referral.theories[1]);
};