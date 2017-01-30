var app = angular.module('SBOKOrg', ['ngRoute', 'ngSanitize']);

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
			.when('/org_intro', {
				templateUrl: 'common/base.html',
				controller: 'ctrOrgIntro'
			})
			.when('/org_roles', {
				templateUrl: 'common/base.html',
				controller: 'ctrOrgRoles'
			})
			.when('/org_project', {
				templateUrl: 'org/project.html',
				controller: 'ctrOrgProject'
			})
			.otherwise({redirectTo: '/'});
}]);

app.controller('ctrOrgIntro', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_intro');
}]);

app.controller('ctrOrgRoles', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_roles');
}]);

app.controller('ctrOrgProject', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_project');
}]);