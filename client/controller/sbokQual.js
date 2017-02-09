var app = angular.module('SBOKQual', ['ngRoute', 'ngSanitize']);

var ctrGen = function($scope, $http, url) {
	//alert("ctrGen: "+url);
	$http.get(url).
		then(function(response){
			$scope.data = response.data
		});
}

app.config (['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$routeProvider
			.when('/qual_intro', {
				templateUrl: '/common/base.html',
				controller: 'ctrQualIntro'
			})
			.when('/qual_roles', {
				templateUrl: '/common/base.html',
				controller: 'ctrQualRoles'
			})
			.when('/qual_defined', {
				templateUrl: '/qual/defined.html',
				controller: 'ctrQualDefined'
			})
			.when('/qual_acceptance', {
				templateUrl: '/qual/acceptance.html',
				controller: 'ctrQualAcceptance'
			})
			.when('/qual_mgt', {
				templateUrl: '/qual/management.html',
				controller: 'ctrQualMgt'
			})
			.when('/qual_summary', {
				templateUrl: '/qual/summary.html',
				controller: 'ctrQualSummary'
			})
			.when('/qual_vs', {
				templateUrl: '/common/base.html',
				controller: 'ctrQualVs'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrQualIntro', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_intro');
}]);

app.controller('ctrQualRoles', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_roles');
}]);

app.controller('ctrQualDefined', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_defined');
}]);

app.controller('ctrQualAcceptance', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_acceptance');
}]);

app.controller('ctrQualMgt', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_management');
}]);

app.controller('ctrQualSummary', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_summary');
}]);

app.controller('ctrQualVs', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/qual_vs');
}]);