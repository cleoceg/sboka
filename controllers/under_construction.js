var txtUnderC = {
     title: "This page is under construction"
 };
 
var renderPage = function (req, res) {
    res.render('underc', txtUnderC);
 };
 
 module.exports.underconst = function (req, res) {
    renderPage(req, res);
};