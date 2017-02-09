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
			.when('/org_owner', {
				templateUrl: 'org/owner.html',
				controller: 'ctrOrgOwner'
			})
			.when('/org_master', {
				templateUrl: 'org/master.html',
				controller: 'ctrOrgMaster'
			})
			.when('/org_team', {
				templateUrl: 'org/team.html',
				controller: 'ctrOrgTeam'
			})
			.when('/org_portfolio', {
				templateUrl: 'org/portfolio.html',
				controller: 'ctrOrgPortfolio'
			})
			.when('/org_summary', {
				templateUrl: 'org/summary.html',
				controller: 'ctrOrgSummary'
			})
			.when('/org_versus', {
				templateUrl: 'common/base.html',
				controller: 'ctrOrgVs'
			})
			.when('/org_theories', {
				templateUrl: 'org/theories.html',
				controller: 'ctrOrgTheories'
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

app.controller('ctrOrgOwner', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_owner');
}]);

app.controller('ctrOrgMaster', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_master');
}]);

app.controller('ctrOrgTeam', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_team');
}]);

app.controller('ctrOrgPortfolio', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_portfolio');
}]);

app.controller('ctrOrgSummary', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_sum');
}]);

app.controller('ctrOrgVs', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_vs');
}]);

app.controller('ctrOrgTheories', ['$scope', '$http', function ($scope, $http) {
		ctrGen($scope, $http, '/api/org_theories');
}]);