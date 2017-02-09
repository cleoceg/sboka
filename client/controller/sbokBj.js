var app = angular.module('SBOKBj', ['ngRoute', 'ngSanitize']);

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
			.when('/bj_intro', {
				templateUrl: '/common/base.html',
				controller: 'ctrBjIntro'
			})
			.when('/bj_roles', {
				templateUrl: '/common/base.html',
				controller: 'ctrBjRoles'
			})
			.when('/bj_vdd', {
				templateUrl: '/bj/vdd.html',
				controller: 'ctrBjVdd'
			})
			.when('/bj_importance', {
				templateUrl: '/bj/importance.html',
				controller: 'ctrBjImportance'
			})
			.when('/bj_techniques', {
				templateUrl: '/bj/technique.html',
				controller: 'ctrBjTechnique'
			})
			.when('/bj_continuous', {
				templateUrl: '/bj/continuous.html',
				controller: 'ctrBjContinuous'
			})
			.when('/bj_benefits', {
				templateUrl: '/bj/benefits.html',
				controller: 'ctrBjBenefits'
			})
			.when('/bj_summary', {
				templateUrl: '/bj/summary.html',
				controller: 'ctrBjSummary'
			})
			.when('/bj_vs', {
				templateUrl: '/common/base.html',
				controller: 'ctrBjVs'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrBjIntro', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_intro');
}]);

app.controller('ctrBjRoles', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_role');
}]);

app.controller('ctrBjVdd', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_vdd');
}]);

app.controller('ctrBjImportance', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_importance');
}]);

app.controller('ctrBjTechnique', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_technique');
}]);

app.controller('ctrBjContinuous', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_continuous');
}]);

app.controller('ctrBjBenefits', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_benefits');
}]);

app.controller('ctrBjSummary', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_summary');
}]);

app.controller('ctrBjVs', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/bj_vs');
}]);