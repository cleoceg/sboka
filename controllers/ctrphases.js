 var step = require('../model/steps');

var renderPhases = function (req, res) {
    res.render('phases', { 
        steps:[step.step1,step.step2,step.step3,step.step4,step.step5]
  });
};

module.exports.phases = function (req, res) {
    renderPhases(req, res);
};