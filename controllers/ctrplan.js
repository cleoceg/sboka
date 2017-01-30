var steps = require('../model/steps');
var procs = require('../model/processes')

var txtPlan = {
     step: steps.step2,
     processes: [procs.p09_1, procs.p09_2, procs.p09_3, procs.p09_4, procs.p09_5]
 };

var renderPlan = function (req, res) {
    res.render('phases/phase', txtPlan);
 };
 
 module.exports.plan = function (req, res) {
    renderPlan(req, res);
};