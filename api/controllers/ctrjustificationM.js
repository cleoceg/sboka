//var txtJustif = require('../../model/justification');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var Table = mongoose.model('Table');

var sendJSONresponse = api.sendJSONresponse;
var myRequest = api.myRequest;

// Business Justification Intro
module.exports.bjIntro = function (req, res) {
    myRequest(req, res, 'bj_01');
};

// Business Justification Role
module.exports.bjRole = function (req, res) {
    myRequest(req, res, 'bj_02');
};

// Business Justification VDD
module.exports.bjVdd = function (req, res) {
	var response = {};
    /*Item
		.findOne({'id':'bj_06'})
		.exec(function(err, item) {
			response.vdd=item;
			Item
				.findOne({'id':'bj_03'})
				.exec(function(err, item) {
					response.overview=item;
					Item
						.findOne({'id':'bj_04'})
						.exec(function(err, item) {
							response.resp_owner=item;
							Item
								.findOne({'id':'bj_05'})
								.exec(function(err, item) {
									response.resp_other=item;
									sendJSONresponse(res, '200', response);
							})
					})
			})
	})*/
	Item
		.find({
			'id': {$in: [
				'bj_06', 'bj_03', 'bj_04', 'bj_05'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.vdd = item[3];
			response.overview=item[0];
			response.resp_owner=item[1];
			response.resp_other=item[2];
			sendJSONresponse(res, '200', response);
		})
};

// Business Justification importance
module.exports.bjImportance = function (req, res) {
    var response = {};
	Item
		.find({
			'id': {$in: [
				'bj_07', 'bj_08', 'bj_09', 'bj_31'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.overview = item[3];
			response.factors=item[0];
			response.lifecycle=item[1];
			response.data=item[2];
			sendJSONresponse(res, '200', response);
		})
};

// Business Justification technique
module.exports.bjTechnique = function (req, res) {
	// bj_10: roi
	// bj_11: roi_exemple
	// bj_12: npv
	// bj_13: npv_example
	// bj_14: irr
	// bj_15: irr_example
	// bj_16: vsm
	// bj_17: customer
	// bj_18: ranking
	// bj_19: story
	// bj_20: txtTechnique (global)
	// bj_32: overview
	// bj_33: Estimation
	// bj_34: Planning
	var response = {};
	Item
		.find({
			'id': {$in: [
				'bj_10', 'bj_11', 'bj_12', 'bj_13', 'bj_14', 'bj_15', 'bj_16', 'bj_17', 'bj_18', 'bj_19', 'bj_20', 'bj_32', 'bj_33', 'bj_34'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.roi = item[0];
			response.roi_example =item[1];
			response.npv=item[2];
			response.npv_example=item[3];
			response.irr=item[4];
			response.irr_example=item[5];
			response.vsm=item[6];
			response.customer=item[7];
			response.ranking=item[8];
			response.story=item[9];
			response.data=item[10];
			response.overview=item[11];
			response.estimation=item[12];
			response.planning=item[13];
			sendJSONresponse(res, '200', response);
		})
};

// Business Justification Continuous Value
module.exports.bjContinuous = function (req, res) {
	var response = {};
	// bj_25: txtContinuous (global)
	// bj_35: Overview
	// bj_36: EVA overview
	// bj_21: EVA
	// bj_22: eva_table (table)
	// bj_23: CFD
	// bj_24: eva_example
	Table
		.findOne({'id':'bj_22'})
		.exec(function(err, item) {
			response.table=item;
			Item
				.find({
					'id': {$in: [
						'bj_21', 'bj_23', 'bj_24', 'bj_25', 'bj_35', 'bj_36'
				]}
			})
				.sort({id:1})
				.exec(function (err, item) {
					response.eva = item[0];
					response.cfd = item[1];
					response.eva_example = item[2];
					response.data = item[3];
					response.overview = item[4];
					response.eva_overview = item[5];
					sendJSONresponse(res, '200', response);
				})
	})
};

// Business Justification Benefits realization
module.exports.bjBenefits = function (req, res) {
	// bj_26: prototype
	// bj_37: overview
	// bj_27: global
	var response = {};
	Item
		.find({
			'id': {$in: [
				'bj_26', 'bj_27', 'bj_37'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.prototype = item[0];
			response.data =item[1];
			response.overview=item[2];
			sendJSONresponse(res, '200', response);
		})
};

// Business Justification summary
module.exports.bjSummary = function (req, res) {
    //sendJSONresponse(res, '200', txtJustif.txtSummary);
	// bj_29: Global
	// bj_28: table
	var response = {}
	Item
		.findOne({'id':'bj_29'})
		.exec(function(err, item) {
			response.data=item;
			Table
				.findOne({'id':'bj_28'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
	})
};

// Business Justification versus
module.exports.bjVersus = function (req, res) {
    myRequest(req, res, 'bj_30');
};