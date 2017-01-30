var steps = require('../model/steps');
var procs = require('../model/processes')

var txtReview = {
     step: steps.step4,
     processes: [procs.p11_1, procs.p11_2, procs.p11_3]
 };

var renderReview = function (req, res) {
    res.render('phases/phase', txtReview);
 };
 
 module.exports.review = function (req, res) {
    renderReview(req, res);
};