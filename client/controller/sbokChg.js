var app = angular.module('SBOKChg', ['ngRoute', 'ngSanitize']);

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
			.when('/chg_intro', {
				templateUrl: '/common/base.html',
				controller: 'ctrChgIntro'
			})
			.when('/chg_roles', {
				templateUrl: '/common/base.html',
				controller: 'ctrChgRoles'
			})
			.when('/chg_overview', {
				templateUrl: '/chg/overview.html',
				controller: 'ctrChgOverview'
			})
			.when('/chg_change', {
				templateUrl: '/chg/change.html',
				controller: 'ctrChgChange'
			})
			.when('/chg_integrating', {
				templateUrl: '/chg/integration.html',
				controller: 'ctrChgIntegration'
			})
			.when('/chg_portfolio', {
				templateUrl: '/chg/portfolio.html',
				controller: 'ctrChgPortfolio'
			})
			.when('/chg_summary', {
				templateUrl: '/chg/summary.html',
				controller: 'ctrChgSummary'
			})
			.when('/chg_vs', {
				templateUrl: '/common/base.html',
				controller: 'ctrChgVersus'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrChgIntro', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_intro');
}]);

app.controller('ctrChgRoles', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_roles');
}]);

app.controller('ctrChgOverview', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_overview');
}]);

app.controller('ctrChgChange', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_change');
}]);

app.controller('ctrChgIntegration', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_integration');
}]);

app.controller('ctrChgPortfolio', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_portfolio');
}]);

app.controller('ctrChgSummary', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_summary');
}]);

app.controller('ctrChgVersus', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/chg_vs');
}]);