// API router for all routes
var express = require('express');
var router = express.Router();

var ctrPrinciples = require('../controllers/ctrprinciplesM'); // with MongoDB
var ctrPhases = require('../controllers/ctrphasesM'); // with MongoDB
var ctrOrganization = require('../controllers/ctrorganizationM'); // with MongoDB
var ctrJustification = require('../controllers/ctrjustificationM'); // with MongoDB
var ctrQuality = require('../controllers/ctrqualityM'); // with MongoDB
var ctrChange = require('../controllers/ctrchangeM'); // with MongoDB
var ctrRisks = require('../controllers/ctrrisksM'); // with MongoDB

// Principles
router.get('/prin_intro', ctrPrinciples.intro);
router.get('/prin_epc', ctrPrinciples.epc);
router.get('/prin_selforg', ctrPrinciples.selforg);
router.get('/prin_collab', ctrPrinciples.collaboration);
router.get('/prin_vb', ctrPrinciples.valuebased);
router.get('/prin_timebox', ctrPrinciples.timeboxing);
router.get('/prin_iterative', ctrPrinciples.iterative);
router.get('/prin_vs', ctrPrinciples.vs);

//phases
router.get('/phs_phases',ctrPhases.phases);
router.get('/phs_initiate',ctrPhases.initiate);
router.get('/phs_plan',ctrPhases.plan);
router.get('/phs_implement', ctrPhases.implement);
router.get('/phs_review', ctrPhases.review);
router.get('/phs_release', ctrPhases.release);
router.get('/proc/:id', ctrPhases.processus); 

// Organization
router.get('/org_intro', ctrOrganization.orgIntro);
router.get('/org_roles', ctrOrganization.orgRoles);
router.get('/org_project', ctrOrganization.orgProject);
router.get('/org_owner', ctrOrganization.orgOwner);
router.get('/org_master', ctrOrganization.orgMaster);
router.get('/org_team', ctrOrganization.orgTeam);
router.get('/org_portfolio', ctrOrganization.orgPortfolio);
router.get('/org_sum', ctrOrganization.orgSummary);
router.get('/org_vs', ctrOrganization.orgVersus);
router.get('/org_theories', ctrOrganization.orgTheories);

// Business Justification
router.get('/bj_intro', ctrJustification.bjIntro);
router.get('/bj_role', ctrJustification.bjRole);
router.get('/bj_vdd', ctrJustification.bjVdd);
router.get('/bj_importance', ctrJustification.bjImportance);
router.get('/bj_technique', ctrJustification.bjTechnique);
router.get('/bj_continuous', ctrJustification.bjContinuous);
router.get('/bj_benefits', ctrJustification.bjBenefits);
router.get('/bj_summary', ctrJustification.bjSummary);
router.get('/bj_vs', ctrJustification.bjVersus);

//quality
router.get('/qual_intro', ctrQuality.qualIntro);
router.get('/qual_roles', ctrQuality.qualRoles);
router.get('/qual_defined', ctrQuality.qualDefined);
router.get('/qual_acceptance', ctrQuality.qualAcceptance);
router.get('/qual_management', ctrQuality.qualManagement);
router.get('/qual_summary', ctrQuality.qualSummary);
router.get('/qual_vs', ctrQuality.qualVs);

// Change
router.get('/chg_intro', ctrChange.chgIntro);
router.get('/chg_roles', ctrChange.chgRoles);
router.get('/chg_overview', ctrChange.chgOverview);
router.get('/chg_change', ctrChange.chgChange);
router.get('/chg_integration', ctrChange.chgIntegration);
router.get('/chg_portfolio', ctrChange.chgPortfolio);
router.get('/chg_summary', ctrChange.chgSummary);
router.get('/chg_vs', ctrChange.chgVersus);

// Risks
router.get('/rsk_roles', ctrRisks.riskRoles);
router.get('/rsk_what', ctrRisks.riskWhat);
router.get('/rsk_mgt', ctrRisks.riskMgt);
router.get('/rsk_mini', ctrRisks.riskMini);
router.get('/rsk_portfolio', ctrRisks.riskPortfolio);
router.get('/rsk_summary', ctrRisks.riskSummary);
router.get('/rsk_vs', ctrRisks.riskVs);

module.exports = router; 