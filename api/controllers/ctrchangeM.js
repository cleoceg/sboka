//var txtChg = require('../../model/change');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var Table = mongoose.model('Table');

var sendJSONresponse = api.sendJSONresponse;
var myRequest = api.myRequest;

// Change Intro
module.exports.chgIntro = function (req, res) {
    myRequest(req, res, 'chg_01');
};

// Change Roles
module.exports.chgRoles = function (req, res) {
    myRequest(req, res, 'chg_02');
};

// Change Overview
module.exports.chgOverview = function (req, res) {
	// chg_03: overview
	// chg_04: unapproved
	// chg_05: global
	var response = {};
	Item
		.find({
			'id': {$in: [
				'chg_03', 'chg_04', 'chg_05'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.overview = item[0];
			response.unapproved =item[1];
			response.data=item[2];
			sendJSONresponse(res, '200', response);
	})
};

// Change Change in Scrum
module.exports.chgChange = function (req, res) {
	// chg_06: balancing
	// chg_07: overview
	// chg_08: stakeholder
	// chg_09: core_team
	// chg_10: senior
	// chg_11: body
	// chg_12: flex_time
	// chg_13: flex_cross
	// chg_14: flex_customer
	// chg_15: flex_integration
	// chg_16: flex_iterative
	// chg_17: achieving
	// chg_18: data (global)
	var response = {};
	Item
		.find({
			'id': {$in: [
				'chg_06', 'chg_07', 'chg_08', 'chg_09', 'chg_10', 'chg_11', 'chg_12', 'chg_13', 'chg_14', 'chg_15', 'chg_16', 'chg_17', 'chg_18'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.balancing = item[0];
			response.overview =item[1];
			response.stakeholder=item[2];
			response.core_team=item[3];
			response.senior=item[4];
			response.body=item[5];
			response.flex_time=item[6];
			response.flex_cross=item[7];
			response.flex_customer=item[8];
			response.flex_integration=item[9];
			response.flex_iterative=item[10];
			response.achieving=item[11];
			response.data=item[12];
			sendJSONresponse(res, '200', response);
	})
};

// Change Integration
module.exports.chgIntegration = function (req, res) {
	// chg_19: overview
	// chg_20: sprint
	// chg_21: impact
	// chg_22: ppbg
	// chg_23: pbrm
	// chg_24: managing
	// chg_25: data (global)
	var response = {};
	Item
		.find({
			'id': {$in: [
				'chg_19', 'chg_20', 'chg_21', 'chg_22', 'chg_23', 'chg_24', 'chg_25'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.overview = item[0];
			response.sprint =item[1];
			response.impact=item[2];
			response.ppbg=item[3];
			response.pbrm=item[4];
			response.managing=item[5];
			response.data=item[6];
			sendJSONresponse(res, '200', response);
	})
};

// Change Portfolio
module.exports.chgPortfolio = function (req, res) {
    // chg_26: inportfolio
	// chg_27: inprogram
	// chg_28: data (global)
	var response = {};
	Item
		.find({
			'id': {$in: [
				'chg_26', 'chg_27', 'chg_28'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.inportfolio = item[0];
			response.inprogram =item[1];
			response.data=item[2];
			sendJSONresponse(res, '200', response);
	})
};

// Change Summary
module.exports.chgSummary = function (req, res) {
    var response = {}
	Item
		.findOne({'id':'chg_29'})
		.exec(function(err, item) {
			response.data=item;
			Table
				.findOne({'id':'chg_29'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
	})
};

// Change Versus
module.exports.chgVersus = function (req, res) {
    myRequest(req, res, 'chg_30');
};