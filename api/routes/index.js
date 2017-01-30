// API router for all routes
var express = require('express');
var router = express.Router();

var ctrPrinciples = require('../controllers/ctrprinciples');
var ctrOrganization = require('../controllers/ctrorganization');
var ctrJustification = require('../controllers/ctrjustification');

// Principles
router.get('/prin_intro', ctrPrinciples.intro);
router.get('/prin_epc', ctrPrinciples.epc);
router.get('/prin_selforg', ctrPrinciples.selforg);
router.get('/prin_collab', ctrPrinciples.collaboration);
router.get('/prin_vb', ctrPrinciples.valuebased);
router.get('/prin_timebox', ctrPrinciples.timeboxing);
router.get('/prin_iterative', ctrPrinciples.iterative);
router.get('/prin_vs', ctrPrinciples.vs);

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

module.exports = router; 

