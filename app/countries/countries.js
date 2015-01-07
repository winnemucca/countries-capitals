viewsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/countries", {
		templateUrl : "./countries/countries.html",
		controller : "CountryCtrl"

	});
}]);
viewsModule.controller('CountryCtrl', ['$scope','$rootScope', 'cacCountries', function($scope, $rootScope, cacCountries) {
	$scope.loading = true;
	cacCountries().then(function(countries) {
		$rootScope.countries = countries;
		$scope.loading = false;
	});

}]);