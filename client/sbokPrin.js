var app = angular.module('SBOKPrin', ['ngRoute', 'ngSanitize']);

var ctrGen = function($scope, $http, url) {
	$http.get(url).
		then(function(response){
			$scope.data = response.data
		});
}

app.config (['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$routeProvider
			.when('/prin_intro', {
				templateUrl: 'common/base.html',
				controller: 'ctrPrinIntro'
			})
			.when('/prin_epc', {
				templateUrl: 'prin/epc.html',
				controller: 'ctrPrinEpc'
			})
			.when('/prin_selforg', {
				templateUrl: 'prin/selforg.html',
				controller: 'ctrPrinSelforg'
			})
			.when('/prin_collab', {
				templateUrl: 'prin/collab.html',
				controller: 'ctrPrinCollab'
			})
			.when('/prin_vb', {
				templateUrl: 'prin/valuebased.html',
				controller: 'ctrPrinVb'
			})
			.when('/prin_time', {
				templateUrl: 'prin/timeboxing.html',
				controller: 'ctrPrinTime'
			})
			.when('/prin_iter', {
				templateUrl: 'prin/iterative.html',
				controller: 'ctrPrinIter'
			})
			.when('/prin_vs', {
				templateUrl: 'common/base.html',
				controller: 'ctrPrinVs'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrPrinIntro', ['$scope', '$http', function ($scope, $http) {
		/*$http.get('/api/prin_intro').
		then(function(response){
			$scope.data = response.data;
		});*/
		ctrGen($scope, $http, '/api/prin_intro');
}]);

app.controller('ctrPrinEpc', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_epc');
}]);

app.controller('ctrPrinSelforg', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_selforg');
}]);

app.controller('ctrPrinCollab', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_collab');
}]);

app.controller('ctrPrinVb', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_vb');
}]);

app.controller('ctrPrinTime', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_timebox');
}]);

app.controller('ctrPrinIter', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_iterative');
}]);

app.controller('ctrPrinVs', ['$scope', '$http', function ($scope, $http) {
	ctrGen($scope, $http, '/api/prin_vs');
}]);