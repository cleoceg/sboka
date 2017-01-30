var steps = require('../model/steps');
var procs = require('../model/processes')

var txtInitiate = {
     step: steps.step1,
     processes: [procs.p08_1,procs.p08_2,procs.p08_3,procs.p08_4,procs.p08_5,procs.p08_6]
 };

var renderInitiate = function (req, res) {
    res.render('phases/phase', txtInitiate);
 };
 
 module.exports.initiate = function (req, res) {
    renderInitiate(req, res);
};