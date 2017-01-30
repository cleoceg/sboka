var express = require('express');
var router = express.Router();
//var ctrphases = require('../controllers/ctrphases');
//var ctrrelease = require('../controllers/ctrrelease');
//var ctrinitiate = require('../controllers/ctrinitiate');
//var ctrplan = require('../controllers/ctrplan');
//var ctrimplement = require('../controllers/ctrimplement');
//var ctrreview = require('../controllers/ctrreview');
//var ctrproc = require('../controllers/ctrprocessus');
//var ctrunderc = require('../controllers/under_construction');
//var ctrRisk = require('../controllers//ctrrisk');
var ctrPrinciples = require('../controllers/ctrprinciplesAng');
//var ctrQuality = require('../controllers/ctrquality');
//var ctrChange = require('../controllers/ctrchange');
//var ctrBJ = require('../controllers/ctrjustification');
var ctrOrg = require('../controllers/ctrorganizationAng');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('angviews/index', { title: 'SBOK Guide' });
});

router.get('/about', function(req, res) {
    res.render('about',{});
});


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

// principles
router.get('/prin_intro', ctrPrinciples.intro);
router.get('/prin_epc', ctrPrinciples.epc);
router.get('/prin_selforg', ctrPrinciples.selforg);
router.get('/prin_collaboration', ctrPrinciples.collaboration);
router.get('/prin_valuebased', ctrPrinciples.valuebased);
router.get('/prin_timeboxing', ctrPrinciples.timeboxing);
router.get('/prin_iterative', ctrPrinciples.iterative);
router.get('/prin_vs', ctrPrinciples.vs);

module.exports = router;
