//var txtOrganization = require('../../model/organization');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var Table = mongoose.model('Table');

var sendJSONresponse = api.sendJSONresponse;
var myRequest = api.myRequest;

// Organization Intro
module.exports.orgIntro = function (req, res) {
	myRequest(req, res, 'org_01');
};

// Organization Roles guide
module.exports.orgRoles = function (req, res) {
	myRequest(req, res, 'org_02');
};

// Organization Project Roles
module.exports.orgProject = function (req, res) {
	var response={};
	Item
        .findOne({'id':'org_11'})
        .exec(function(err, item) {
			response.data=item;
            Item
				.findOne({'id':'org_10'})
				.exec(function(err, item) {
					response.noncore=item;
					Item
						.findOne({'id':'org_06'})
						.exec(function(err, item) {
							response.core=item;
							Item
								.findOne({'id':'org_47'})
								.exec(function(err, item) {
									response.overview=item;
									Item
										.findOne({'id':'org_03'})
										.exec(function(err, item) {
											response.owner=item;
											Item
												.findOne({'id':'org_04'})
												.exec(function(err, item) {
													response.sm=item;
													Item
														.findOne({'id':'org_05'})
														.exec(function(err, item) {
															response.st=item;
															Item
																.findOne({'id':'org_07'})
																.exec(function(err, item) {
																	response.stakeholder=item;
																	Item
																		.findOne({'id':'org_08'})
																		.exec(function(err, item) {
																			response.vendors=item;
																			Item
																				.findOne({'id':'org_09'})
																				.exec(function(err, item) {
																					response.SGB=item;
																					sendJSONresponse(res, '200', response);
																			})
																	})
															})
													})
											})
									})
							})
					})
			})
		})
};

// Organization Product Owner
module.exports.orgOwner = function (req, res) {
	var response = {};
    Item
		.findOne({'id':'org_48'})
		.exec(function(err, item) {
			response.overview=item;
			Item
				.findOne({'id':'org_15'})
				.exec(function(err, item) {
					response.data=item;
					Item
						.findOne({'id':'org_12'})
						.exec(function(err, item) {
							response.VOC=item;
							Item
								.findOne({'id':'org_13'})
								.exec(function(err, item) {
									response.chief=item;
									Table
										.findOne({'id':'org_14'})
										.exec(function(err, item) {
											response.table=item;
											sendJSONresponse(res, '200', response);
									})
							})
					})
			})
	})
};

// Organization Scrum Master
module.exports.orgMaster = function (req, res) {
	var response = {};
	Item
		.findOne({'id':'org_18'})
		.exec(function(err, item) {
			response.data=item;
			Item
				.findOne({'id':'org_49'})
				.exec(function(err, item) {
					response.overview=item;
					Item
						.findOne({'id':'org_16'})
						.exec(function(err, item) {
							response.chief=item;
							Table
								.findOne({'id':'org_17'})
								.exec(function(err, item) {
									response.table=item;
									sendJSONresponse(res, '200', response);
							})
					})
			})
	})
};

// Organization Scrum Team
module.exports.orgTeam = function (req, res) {
    var response = {};
	Item
		.findOne({'id':'org_22'})
		.exec(function(err, item) {
			response.data=item;
			Item
				.findOne({'id':'org_50'})
				.exec(function(err, item) {
					response.overview=item;
					Item
						.findOne({'id':'org_19'})
						.exec(function(err, item) {
							response.perso=item;
							Table
								.findOne({'id':'org_21'})
								.exec(function(err, item) {
									response.table=item;
									Item
										.findOne({'id':'org_20'})
										.exec(function(err, item) {
											response.size=item;
											sendJSONresponse(res, '200', response);
									})
							})
					})
			})
	})
};

// Organization Portfolio
module.exports.orgPortfolio = function (req, res) {
    var response = {};
	var examples = []
	Item
		.findOne({'id':'org_35'})
		.exec(function(err, item) {
			response.data=item;
			Item
				.findOne({'id':'org_26'})
				.exec(function(err, item) {
					response.definition=item;
					Item
						.findOne({'id':'org_23'})
						.exec(function(err, item) {
							examples.push(item);
							Item
								.findOne({'id':'org_24'})
								.exec(function(err, item) {
									examples.push(item);
									Item
										.findOne({'id':'org_25'})
										.exec(function(err, item) {
											examples.push(item);
											response.examples = examples
											Item
												.findOne({'id':'org_27'})
												.exec(function(err, item) {
													response.sos = item
													Item
														.findOne({'id':'org_28'})
														.exec(function(err, item) {
															response.project = item
															Item
																.findOne({'id':'org_29'})
																.exec(function(err, item) {
																	response.folios = item
																	Item
																		.findOne({'id':'org_30'})
																		.exec(function(err, item) {
																			response.programs = item
																			Item
																				.findOne({'id':'org_31'})
																				.exec(function(err, item) {
																					response.working = item
																					Item
																						.findOne({'id':'org_32'})
																						.exec(function(err, item) {
																							response.managing = item
																							Item
																								.findOne({'id':'org_33'})
																								.exec(function(err, item) {
																									response.portfolio = item
																									Item
																										.findOne({'id':'org_34'})
																										.exec(function(err, item) {
																											response.involvment = item
																											sendJSONresponse(res, '200', response);
																							})
																							})
																					})
																			})
																	})
															})
													})
											})
									})
							})
					})
			})
	})
};

// Organization Summary
module.exports.orgSummary = function (req, res) {
    var response = {}
	Item
		.findOne({'id':'org_37'})
		.exec(function(err, item) {
			response.data=item;
			Table
				.findOne({'id':'org_36'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
	})
};

// Organization Versus
module.exports.orgVersus = function (req, res) {
    myRequest(req, res, 'org_38');
};

// Organization HT theories
module.exports.orgTheories = function (req, res) {
    var response = {}
	Item
		.findOne({'id':'org_51'})
		.exec(function(err, item) {
			response.data=item;
			Item
				.findOne({'id':'org_39'})
				.exec(function(err, item) {
					response.tuckman=item;
					Item
						.findOne({'id':'org_40'})
						.exec(function(err, item) {
							response.conflict=item;
							Item
								.findOne({'id':'org_41'})
								.exec(function(err, item) {
									response.techniques=item;
									Item
										.findOne({'id':'org_44'})
										.exec(function(err, item) {
											response.leadership=item;
											Item
												.findOne({'id':'org_42'})
												.exec(function(err, item) {
													response.styles=item;
													Item
														.findOne({'id':'org_43'})
														.exec(function(err, item) {
															response.servant=item;
															Item
																.findOne({'id':'org_45'})
																.exec(function(err, item) {
																	response.maslow=item;
																	Item
																		.findOne({'id':'org_46'})
																		.exec(function(err, item) {
																			response.xy=item;
																			sendJSONresponse(res, '200', response);
																	})
															})
													})
											})
									})
							})
					})
			})
	})
};