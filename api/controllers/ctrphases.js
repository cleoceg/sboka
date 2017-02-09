var procs = require('../../model/processes');
var steps = require('../../model/steps');
var api = require('./ctrCommon');

var sendJSONresponse = api.sendJSONresponse;

// global phases
var txtPhases = { 
    steps:[steps.step1,steps.step2,steps.step3,steps.step4,steps.step5]
};

module.exports.phases = function(req,res) {
	sendJSONresponse(res, '200', txtPhases);
}

// Phase Initiate
var txtInitiate = {
    step: steps.step1,
    processes: [procs.p08_1,procs.p08_2,procs.p08_3,procs.p08_4,procs.p08_5,procs.p08_6]
 };
 
module.exports.initiate = function (req, res) {
    sendJSONresponse(res, '200', txtInitiate);
};

// Phase Plan
var txtPlan = {
    step: steps.step2,
    processes: [procs.p09_1, procs.p09_2, procs.p09_3, procs.p09_4, procs.p09_5]
 };
 
module.exports.plan = function (req, res) {
    sendJSONresponse(res, '200', txtPlan);
};

// Phase Implement
var txtImplement = {
     step: steps.step3,
     processes: [procs.p10_1, procs.p10_2, procs.p10_3]
};
 
module.exports.implement = function (req, res) {
    sendJSONresponse(res, '200', txtImplement);
};

// Phase review
var txtReview = {
     step: steps.step4,
     processes: [procs.p11_1, procs.p11_2, procs.p11_3]
 };
 
module.exports.review = function (req, res) {
    sendJSONresponse(res, '200', txtReview);
};

// Phase release
var txtRelease = {
     step: steps.step5,
     processes: [procs.p12_1, procs.p12_2]
 };
 
module.exports.release = function (req, res) {
    sendJSONresponse(res, '200', txtRelease);
};

// any processus
module.exports.processus = function(req, res) {
	var txtProc = {
		processus: eval('procs.'+req.params.id)
	}
	sendJSONresponse(res, '200', txtProc);
}