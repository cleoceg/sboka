//var txtRisks = require('../../model/risks');
var api = require('./ctrCommon');
var mongoose = require( 'mongoose' );
var Item = mongoose.model('Item');
var Table = mongoose.model('Table');

var sendJSONresponse = api.sendJSONresponse;
var myRequest = api.myRequest;

// Risks Roles
module.exports.riskRoles = function (req, res) {
    var response = {};
	Item
		.find({
			'id': {$in: [
				'rsk_01', 'rsk_02', 'rsk_03', 'rsk_04'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.role1 = item[0];
			response.role2 =item[1];
			response.role3 =item[2];
			response.data=item[3];
			sendJSONresponse(res, '200', response);
	})
};

// Risks What
module.exports.riskWhat = function (req, res) {
    //sendJSONresponse(res, '200', txtRisks.txtwhat);
	// rsk_05: gen
	// rsk_06: risks
	// rsk_07: issues
	// rsk_08: risk_conclusion
	// rsk_09: attitude
	// rsk_10: utility
	// rsk_11: Data (global)
        var response = {};
	Item
		.find({
			'id': {$in: [
				'rsk_05', 'rsk_06', 'rsk_07', 'rsk_08', 'rsk_09', 'rsk_10', 'rsk_11'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.gen = item[0];
			response.risks =item[1];
			response.issues =item[2];
			response.risk_conclusions=item[3];
                        response.attitude = item[4];
                        response.utility = item[5];
                        response.data = item[6];
			sendJSONresponse(res, '200', response);
	})
};

// Risks Management
module.exports.riskMgt = function (req, res) {
    // rsk_12: overview
    // rsk_13: identification
    // rsk_14: risque 1
    // rsk_15: risque 2
    // rsk_16: risque 3
    // rsk_17: risque 4
    // rsk_18: risque 5
    // rsk_19: spike
    // rsk_20: assessment overview
    // rsk_21: assessement tech 1
    // rsk_22: assessement tech 2
    // rsk_23: assessement tech 3
    // rsk_24: assessement tech 4
    // rsk_25: assessement tech 5
    // rsk_26: prioritization
    // rsk_27: mitigation
    // rsk_28: burndown
    // rsk_29: communication
    // rsk_30: assessment gen
    // rsk_31: data
    var response = {};
	Item
		.find({
			'id': {$in: [
				'rsk_12', 'rsk_13', 'rsk_14', 'rsk_15', 'rsk_16', 'rsk_17', 'rsk_18', 'rsk_19', 'rsk_20', 'rsk_21', 'rsk_22', 'rsk_23', 'rsk_24', 'rsk_25', 'rsk_26', 'rsk_27', 'rsk_28', 'rsk_29', 'rsk_30', 'rsk_31'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.overview = item[0];
			response.identification =item[1];
			response.risque1 =item[2];
			response.risque2=item[3];
                        response.risque3 = item[4];
                        response.risque4 = item[5];
                        response.risque5 = item[6];
                        response.spike = item[7];
                        response.assess_overview = item[8];
                        response.assess_tech1 = item[9];
                        response.assess_tech2 = item[10];
                        response.assess_tech3 = item[11];
                        response.assess_tech4 = item[12];
                        response.assess_tech5 = item[13];
                        response.prioritization = item[14];
                        response.mitigation = item[15];
                        response.burndown = item[16];
                        response.communication = item[17];
                        response.assess_gen = item[18];
                        response.data = item[19];
			sendJSONresponse(res, '200', response);
	})
};

// Risks Minimizing
module.exports.riskMini = function (req, res) {
    // rsk_32: mini1
    // rsk_33: mini2
    // rsk_34: mini3
    // rsk_35: mini4
    // rsk_36: mini5
    // rsk_37: data
    var response = {};
	Item
		.find({
			'id': {$in: [
				'rsk_32', 'rsk_33', 'rsk_34', 'rsk_35', 'rsk_36', 'rsk_37'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.mini1 = item[0];
			response.mini2 =item[1];
			response.mini3 =item[2];
			response.mini4=item[3];
                        response.mini5 = item[4];
                        response.data = item[5];
			sendJSONresponse(res, '200', response);
	})
};

// Risks Portfolio & program
module.exports.riskPortfolio = function (req, res) {
    // rsk_38: intro
    // rsk_39: inportfolio
    // rsk_40: inprogram
    // rsk_41: data (global)
    var response = {};
	Item
		.find({
			'id': {$in: [
				'rsk_38', 'rsk_39', 'rsk_40', 'rsk_41'
			]}
		})
		.sort({id:1})
		.exec(function (err, item) {
			response.intro = item[0];
			response.inportfolio =item[1];
			response.inprogram =item[2];
                        response.data = item[3];
			sendJSONresponse(res, '200', response);
	})
};

// Risks Summary
module.exports.riskSummary = function (req, res) {
    var response = {}
	Item
		.findOne({'id':'rsk_42'})
		.exec(function(err, item) {
			response.data=item;
			Table
				.findOne({'id':'rsk_43'})
				.exec(function(err, item) {
					response.table=item;
					sendJSONresponse(res, '200', response);
			})
	})
};

// Risks Versus
module.exports.riskVs = function (req, res) {
    myRequest(req, res, 'rsk_44');
};