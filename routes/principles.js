var express = require('express');
var router = express.Router();
var ctrPrinciples = require('../controllers/ctrprinciples');

// principles
router.get('/intro', ctrPrinciples.intro);
router.get('/epc', ctrPrinciples.epc);
router.get('/selforg', ctrPrinciples.selforg);
router.get('/collaboration', ctrPrinciples.collaboration);
router.get('/valuebased', ctrPrinciples.valuebased);
router.get('/timeboxing', ctrPrinciples.timeboxing);
router.get('/iterative', ctrPrinciples.iterative);
router.get('/principles_vs', ctrPrinciples.vs);

module.exports = router;
