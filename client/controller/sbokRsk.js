var app = angular.module('SBOKRsk', ['ngRoute', 'ngSanitize']);

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
			.when('/risk_role', {
				templateUrl: '/rsk/roles.html',
				controller: 'ctrRskRoles'
			})
			.when('/risk_what', {
				templateUrl: '/rsk/what.html',
				controller: 'ctrRskWhat'
			})
			.when('/risk_mgt', {
				templateUrl: '/rsk/management.html',
				controller: 'ctrRskMgt'
			})
			.when('/risk_mini', {
				templateUrl: '/rsk/minimizing.html',
				controller: 'ctrRskMini'
			})
			.when('/risk_portfolio', {
				templateUrl: '/rsk/portfolio.html',
				controller: 'ctrRskPortfolio'
			})
			.when('/risk_summary', {
				templateUrl: '/rsk/summary.html',
				controller: 'ctrRskSummary'
			})
			.when('/risk_vs', {
				templateUrl: '/common/base.html',
				controller: 'ctrRskVs'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrRskRoles', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_roles');
}]);

app.controller('ctrRskWhat', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_what');
}]);

app.controller('ctrRskMgt', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_mgt');
}]);

app.controller('ctrRskMini', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_mini');
}]);

app.controller('ctrRskPortfolio', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_portfolio');
}]);

app.controller('ctrRskSummary', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_summary');
}]);

app.controller('ctrRskVs', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/rsk_vs');
}]);