
viewsModule.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "./home/home.html",
		controller : 'HomeCtrl'
	});
}])

viewsModule.controller('HomeCtrl', ['$scope',function($scope) {

}]);

