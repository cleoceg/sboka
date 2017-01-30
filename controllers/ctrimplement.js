var steps = require('../model/steps');
var procs = require('../model/processes')

var txtImplement = {
     step: steps.step3,
     processes: [procs.p10_1, procs.p10_2, procs.p10_3]
 };

var renderImplement = function (req, res) {
    res.render('phases/phase', txtImplement);
 };
 
 module.exports.implement = function (req, res) {
    renderImplement(req, res);
};