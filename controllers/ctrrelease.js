//var items = require('../model/items');
var steps = require('../model/steps');
var procs = require('../model/processes')

 var txtRelease = {
     step: steps.step5,
     processes: [procs.p12_1, procs.p12_2]
 };

var renderRelease = function (req, res) {
    res.render('phases/phase', txtRelease);
 };
 
 module.exports.release = function (req, res) {
    renderRelease(req, res);
};