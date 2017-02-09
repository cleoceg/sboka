//var txtQual = require('../../model/quality');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var Table = mongoose.model('Table');

var sendJSONresponse = api.sendJSONresponse;
var myRequest = api.myRequest;

// Quality Intro
module.exports.qualIntro = function (req, res) {
    myRequest(req, res, 'qual_01');
};

// Quality roles
module.exports.qualRoles = function (req, res) {
    myRequest(req, res, 'qual_02');
};

// Quality defined
module.exports.qualDefined = function (req, res) {
	// qual_03: scope
	// qual_04: value
	// qual_21: overview
	// qual_05: Global
	var response = {};
	Item
		.find({
			'id': {$in: [
				'qual_03', 'qual_04', 'qual_05', 'qual_21'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.scope = item[0];
			response.value =item[1];
			response.data=item[2];
			response.overview = item[3];
			sendJSONresponse(res, '200', response);
		})
};

// Quality Acceptance
module.exports.qualAcceptance = function (req, res) {
    //sendJSONresponse(res, '200', txtQual.txtAcceptance);
	// qual_22: overview
	// qual_07: writing
	// qual_06 : writing_example
	// qual_09: minimum
	// qual_08: cascading (table)
	// qual_10: done
	// qual_11: acceptance: 
	// qual_12: global
	var response = {};
	Item
		.find({
			'id': {$in: [
				'qual_06', 'qual_07', 'qual_09', 'qual_10', 'qual_11', 'qual_12', 'qual_22'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.example = item[0];
			response.writing =item[1];
			response.minimum=item[2];
			response.done = item[3];
			response.acceptance = item[4];
			response.data = item[5];
			response.overview = item[6];
			Table
				.findOne({'id':'qual_08'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
		})
};

// Quality Management
module.exports.qualManagement = function (req, res) {
    //sendJSONresponse(res, '200', txtQual.txtManagement);
};

// Quality Summary
module.exports.qualSummary = function (req, res) {
    var response = {}
	Item
		.findOne({'id':'qual_19'})
		.exec(function(err, item) {
			response.data=item;
			Table
				.findOne({'id':'qual_18'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
	})
};

// Quality Versus
module.exports.qualVs = function (req, res) {
    myRequest(req, res, 'qual_20');
};