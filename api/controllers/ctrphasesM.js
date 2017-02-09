var procs = require('../../model/processes');
var steps = require('../../model/steps');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Step = mongoose.model('Step');
var Proc = mongoose.model('Proc');
var Item = mongoose.model('Item');

var sendJSONresponse = api.sendJSONresponse;

// global phases - not used any more
var txtPhases = { 
    steps:[steps.step1,steps.step2,steps.step3,steps.step4,steps.step5]
};
module.exports.phases = function(req,res) {
    var response ={};
    var steps = [];
    Step
        .findOne({'id':'step1'})
        .exec(function(err,step) {
            response.steps=steps;
            steps.push(step);
            Step
                .findOne({'id':'step2'})
                .exec(function(err,step) {
                    response.steps=steps;
                    steps.push(step);
                    Step
                        .findOne({'id':'step3'})
                        .exec(function(err,step) {
                            response.steps=steps;
                            steps.push(step);
                            Step
                                .findOne({'id':'step4'})
                                .exec(function(err,step) {
                                    response.steps=steps;
                                    steps.push(step);
                                    Step
                                        .findOne({'id':'step5'})
                                        .exec(function(err,step) {
                                            response.steps=steps;
                                            steps.push(step);
                                            sendJSONresponse(res, '200', response);
                                    });
                            });
                    });
            });
    });  
}
// loop search on array of procs
function procSearch(proc, callback) {
	var tab=[];
	// loop on the procs list
	proc.forEach(function(p) {
		// for each proc we search info in mongodb
		procOneSearch(p,function(ret) {
			tab.push(ret);
			// return of the outcomes when it is fully filled
			if (tab.length == proc.length)
				callback(tab);
		})
	})
}
// search a proc data in mongodb
function procOneSearch(t, callback) {
	Proc
		.findOne({'id':t})
		.exec(function(err,term) {
			callback (term);
		})
}

// Phase Initiate
module.exports.initiate = function (req, res) {
    var processes = ['p08_1','p08_2','p08_3','p08_4','p08_5','p08_6'];
    var response = {};
    var procs = [];
    Step
        .findOne({'id':'step1'})
        .exec(function(err,step) {
            response.step=step;
            procSearch(processes, function(t) {
				response.processes=t;
				//console.log(response.processes);
				sendJSONresponse(res, '200', response);
			})
            
    });
};

// Phase Plan
module.exports.plan = function (req, res) {
    var processes = ['p09_1', 'p09_2', 'p09_3', 'p09_4', 'p09_5'];
    var response = {};
    var procs = [];
    Step
        .findOne({'id':'step2'})
        .exec(function(err,step) {
            response.step=step;
            procSearch(processes, function(t) {
				response.processes=t;
				sendJSONresponse(res, '200', response);
			})
    });
};

// Phase Implement
module.exports.implement = function (req, res) {
    var processes = ['p10_1', 'p10_2', 'p10_3'];
    var response = {};
    var procs = [];
    Step
        .findOne({'id':'step3'})
        .exec(function(err,step) {
            response.step=step;
            procSearch(processes, function(t) {
				response.processes=t;
				sendJSONresponse(res, '200', response);
			})
    });
};

// Phase review
module.exports.review = function (req, res) {
    var processes = ['p11_1', 'p11_2', 'p11_3'];
    var response = {};
    var procs = [];
    Step
        .findOne({'id':'step4'})
        .exec(function(err,step) {
            response.step=step;
            procSearch(processes, function(t) {
				response.processes=t;
				sendJSONresponse(res, '200', response);
			})
    });
};

// Phase release
module.exports.release = function (req, res) {
    var processes = ['p12_1', 'p12_2'];
    var response = {};
    var procs = [];
    Step
        .findOne({'id':'step5'})
        .exec(function(err,step) {
            response.step=step;
            procSearch(processes, function(t) {
				response.processes=t;
				sendJSONresponse(res, '200', response);
			})
    });
};

// loop search on array of procs
function ItemsSearch(proc, callback) {
	var tab=[];
	// loop on the procs list
	proc.forEach(function(p) {
		// for each proc we search info in mongodb
		itemOneSearch(p,function(ret) {
			tab.push(ret);
			// return of the outcomes when it is fully filled
			if (tab.length == proc.length)
				callback(tab);
		})
	})
}
// search a proc data in mongodb
function itemOneSearch(t, callback) {
	Item
		.findOne({'id':t})
		.exec(function(err,term) {
			callback (term);
		})
}

// any processus
module.exports.processus = function(req, res) {
	var response = {};
	var id = req.params.id;

	console.log(id);
	Proc
		.findOne({'id':id})
		.exec(function(err,item) {
			response.processus = item;
			ItemsSearch(item.input, function(ret) {
				response.input=ret;
				ItemsSearch(item.tools, function(ret) {
					response.tools=ret;
					ItemsSearch(item.output, function(ret) {
						response.output=ret;
						sendJSONresponse(res, '200', response);
					})
				})
			})
			
		})
}