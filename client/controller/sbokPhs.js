var app = angular.module('SBOKPhs', ['ngRoute', 'ngSanitize']);

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
			.when('/Initiate', {
				templateUrl: '/phs/phase.html',
				controller: 'ctrInitiate'
			})
			.when('/Plan', {
				templateUrl: '/phs/phase.html',
				controller: 'ctrPlan'
			})
			.when('/Implement', {
				templateUrl: '/phs/phase.html',
				controller: 'ctrImplement'
			})
			.when('/Review', {
				templateUrl: '/phs/phase.html',
				controller: 'ctrReview'
			})
			.when('/Release', {
				templateUrl: '/phs/phase.html',
				controller: 'ctrRelease'
			})
			.when('/processus/:id', {
				templateUrl: '/phs/processus.html',
				controller: 'ctrProcessus'
			})
			.when('/phases', {
				templateUrl: '/phs/phases.html',
				controller: 'ctrPhases'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrInitiate', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_initiate');
}]);

app.controller('ctrPlan', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_plan');
}]);

app.controller('ctrImplement', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_implement');
}]);

app.controller('ctrReview', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_review');
}]);

app.controller('ctrRelease', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_release');
}]);

app.controller('ctrProcessus', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		ctrGen($scope, $http, '/api/proc/'+$routeParams.id);
}]);

app.controller('ctrPhases', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/phs_phases');
}]);

