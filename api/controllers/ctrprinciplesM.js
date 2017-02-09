//var txtPrinciples = require('../../model/principles');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var sendJSONresponse = api.sendJSONresponse;

var myRequest = function(req, res, mong) {
    
    Item
        .findOne({'id':mong})
        .exec(function(err, item) {
            sendJSONresponse(res, '200', item);    
    });
}

// roles guide
module.exports.intro = function (req, res) {
        myRequest(req, res, 'prin_01');
};

// EPC
module.exports.epc = function (req, res) {
    
        //sendJSONresponse(res, '200', txtPrinciples.txtEpc);
    
    var response={epc:''}
	Item
            .findOne({'id':'prin_23'})
            .exec(function(err, item) {
		// traitement d'epc
                response.epc=item;
                Item
                    .findOne({'id':'prin_02'})
                    .exec(function(err,item) {
                        // Transparency
                        response.Transparency=item;
                        Item
                            .findOne({'id': 'prin_03'})
                            .exec (function (err, item) {
                                // Inspection
                                response.Inspection=item;
                                Item
                                    .findOne({'id':'prin_04'})
                                    .exec(function(err,item) {
                                        // Adaptation
                                        response.Adaptation=item;
                                        sendJSONresponse(res, '200', response);
                                })
                        })     
                })
	})
};

// Self-Organization
module.exports.selforg = function (req, res) {
    var response = {};
    Item
        .findOne({'id':'prin_24'})
        .exec(function(err,item) {
            response.overview = item;
            Item
                .findOne({'id':'prin_06'})
                .exec(function(err,item) {
                    response.benefits = item;
                    Item
                        .findOne({'id':'prin_07'})
                        .exec(function(err,item) {
                            response.goals=item;
                            sendJSONresponse(res, '200', response);
                    })
            })
    })
};

// Collaboration
module.exports.collaboration = function (req, res) {
    var response = {};
    Item
        .findOne({'id':'prin_09'})
        .exec(function(err,item) {
            response.benefits = item;
            Item
                .findOne({'id':'prin_10'})
                .exec(function(err,item) {
                    response.importance = item;
                    Item
                        .findOne({'id':'prin_11'})
                        .exec(function(err,item) {
                            response.colocated = item;
                            Item
                                .findOne({'id':'prin_12'})
                                .exec(function(err,item) {
                                    response.distributed = item;
                                    Item
                                        .findOne({'id':'prin_25'})
                                        .exec(function(err,item) {
                                            response.overview = item;
                                            sendJSONresponse(res, '200', response);
                                    })
                            })
                    })
            })
    })
};

// value-based
module.exports.valuebased = function (req, res) {
    myRequest(req, res, 'prin_14');
};

// timeboxing
module.exports.timeboxing = function (req, res) {
    var response = {};
    Item
        .findOne({'id':'prin_26'})
        .exec(function(err,item) {
            response.overview = item;
            Item
                .findOne({'id':'prin_15'})
                .exec(function(err,item) {
                    response.sprint = item;
                    Item
                        .findOne({'id':'prin_16'})
                        .exec(function(err,item) {
                            response.standup = item;
                            Item
                                .findOne({'id':'prin_17'})
                                .exec(function(err,item) {
                                    response.planning = item;
                                    Item
                                        .findOne({'id':'prin_18'})
                                        .exec(function(err,item) {
                                            response.review = item;
                                            Item
                                                .findOne({'id':'prin_19'})
                                                .exec(function(err,item) {
                                                    response.retrospect = item;
                                                    sendJSONresponse(res, '200', response);
                                            })
                                    })
                            })
                    })
            })
    })
};

// iterative
module.exports.iterative = function (req, res) {
    myRequest(req, res, 'prin_21');
};

// versus
module.exports.vs = function (req, res) {
    myRequest(req, res, 'prin_22');
};