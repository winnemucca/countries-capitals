
angular.module('CACApp', ['CACAppViews','ngRoute'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider,$routeProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider.otherwise({
			redirectTo : '/home'
		});
	}])