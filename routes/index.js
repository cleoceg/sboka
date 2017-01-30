var express = require('express');
var router = express.Router();
var ctrphases = require('../controllers/ctrphases');
var ctrrelease = require('../controllers/ctrrelease');
var ctrinitiate = require('../controllers/ctrinitiate');
var ctrplan = require('../controllers/ctrplan');
var ctrimplement = require('../controllers/ctrimplement');
var ctrreview = require('../controllers/ctrreview');
var ctrproc = require('../controllers/ctrprocessus');
var ctrunderc = require('../controllers/under_construction');
var ctrRisk = require('../controllers//ctrrisk');
var ctrPrinciples = require('../controllers/ctrprinciples');
var ctrQuality = require('../controllers/ctrquality');
var ctrChange = require('../controllers/ctrchange');
var ctrBJ = require('../controllers/ctrjustification');
var ctrOrg = require('../controllers/ctrorganization');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SBOK Guide' });
});

router.get('/about', function(req, res) {
    res.render('about',{});
});

// principles
//router.get('/intro', ctrPrinciples.intro);
//router.get('/epc', ctrPrinciples.epc);
//router.get('/selforg', ctrPrinciples.selforg);
//router.get('/collaboration', ctrPrinciples.collaboration);
//router.get('/valuebased', ctrPrinciples.valuebased);
//router.get('/timeboxing', ctrPrinciples.timeboxing);
//router.get('/iterative', ctrPrinciples.iterative);
//router.get('/principles_vs', ctrPrinciples.vs);

// Phases
router.get('/phases', ctrphases.phases);
router.get('/release', ctrrelease.release);
router.get('/initiate', ctrinitiate.initiate);
router.get('/plan', ctrplan.plan);
router.get('/implement', ctrimplement.implement);
router.get('/review', ctrreview.review);
router.get('/processus/:id', ctrproc.display);

// Organization
router.get('/org_intro', ctrOrg.orgIntro);
router.get('/org_roles', ctrOrg.orgRoles);
router.get('/org_project', ctrOrg.orgProject);
router.get('/org_owner', ctrOrg.orgOwner);
router.get('/org_master', ctrOrg.orgMaster);
router.get('/org_team', ctrOrg.orgTeam);
router.get('/org_portfolio', ctrOrg.orgPortfolio);
router.get('/org_summary', ctrOrg.orgSummary);
router.get('/org_versus', ctrOrg.orgVersus);
router.get('/org_theories', ctrOrg.orgTheories);

// Business Justification
router.get('/bj_intro', ctrBJ.bjIntro);
router.get('/bj_roles', ctrBJ.bjRole);
router.get('/bj_vdd', ctrBJ.bjVdd);
router.get('/bj_importance', ctrBJ.bjImportance);
router.get('/bj_techniques', ctrBJ.bjTechnique);
router.get('/bj_continuous', ctrBJ.bjContinuous);
router.get('/bj_benefits', ctrBJ.bjBenefits);
router.get('/bj_summary', ctrBJ.bjSummary);
router.get('/bj_vs', ctrBJ.bjVersus);

// Quality
router.get('/qual_intro', ctrQuality.qualintro);
router.get('/qual_roles', ctrQuality.qualroles);
router.get('/qual_defined', ctrQuality.qualdefined);
router.get('/qual_acceptance', ctrQuality.qualacceptance);
router.get('/qual_mgt', ctrQuality.qualmanagement);
router.get('/qual_summary', ctrQuality.qualsummary);
router.get('/qual_vs', ctrQuality.qualvs);

// Change
router.get('/chg_intro', ctrChange.chgIntro);
router.get('/chg_roles', ctrChange.chgRoles);
router.get('/chg_overview', ctrChange.chgOverview);
router.get('/chg_change', ctrChange.chgChange);
router.get('/chg_integrating', ctrChange.chgIntegration);
router.get('/chg_portfolio', ctrChange.chgPortfolio);
router.get('/chg_summary', ctrChange.chgSummary);
router.get('/chg_vs', ctrChange.chgVersus);

// Risks
router.get('/risk_role', ctrRisk.roles);
router.get('/risk_what', ctrRisk.what);
router.get('/risk_mgt', ctrRisk.management);
router.get('/risk_mini', ctrRisk.minimizing);
router.get('/risk_portfolio', ctrRisk.portfolio);
router.get('/risk_summary', ctrRisk.summary);
router.get('/risk_vs', ctrRisk.vs);

module.exports = router;
