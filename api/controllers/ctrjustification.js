var txtJustif = require('../../model/justification');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Business Justification Intro
module.exports.bjIntro = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtIntro);
};

// Business Justification Role
module.exports.bjRole = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtRole);
};

// Business Justification VDD
module.exports.bjVdd = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtVdd);
};

// Business Justification importance
module.exports.bjImportance = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtImportance);
};

// Business Justification technique
module.exports.bjTechnique = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtTechnique);
};

// Business Justification Continuous Value
module.exports.bjContinuous = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtContinuous);
};

// Business Justification Benefits realization
module.exports.bjBenefits = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtBenefits);
};

// Business Justification summary
module.exports.bjSummary = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtSummary);
};

// Business Justification versus
module.exports.bjVersus = function (req, res) {
    sendJSONresponse(res, '200', txtJustif.txtVersus);
};