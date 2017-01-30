var app = angular.module('SBOKA', ['ngRoute', 'ngSanitize', 'SBOKPrin', 'SBOKOrg']);

app.config (['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.html',
				controller: 'homeCtrl',
			})
			
			.otherwise({redirectTo: '/'});
}]);

	
app.controller('homeCtrl', ['$scope', function ($scope) {
		//alert("I'm in homectrl");
		$scope.msg='homectrl';
}]);

app.directive('footerGeneric', function() {
	return {
		restrict: 'EA',
		templateUrl: 'directives/footer.html'
	};
});

app.directive('navigation', function() {
	return {
		restrict: 'EA',
		templateUrl: 'directives/navigation.html'
	};
});