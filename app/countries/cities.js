// viewsModule.config(['routeProvider', function($routeProvider) {
// 		$routeProvider.when("/countries/:countryCode") {
// 			templateUrl : "./countries/cities.html",
// 			controller : "CityCtrl",
// 			resolve : {
// 				cityDetails : ['cacFindCountry', '$route', function(cacFindCountry, $route) {
// 					var countryCode = $route.current.params.countryCode;
// 					return cacFindCountry(countryCode);
// 				}],
// 				countryNeighbors : ['cacFindNeighbors','$route', function(cacFindNeighbors, $route) {
// 					var countryCode= $route.current.params.countryCode;
// 					return cacFindNeighbors(countryCode);
// 				}],
// 				countryDetails : ['$rootScope', '$route', function($routeScope, $route) {
// 					var countryIndex = arryObjectIndexOf($rootScope.countries, $route.current.params.countryCode);
// 					return $rootScope.countries[countryIndex];
// 				}]
// 			}
// 		}
// }]);

viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries/:countryCode", {
    templateUrl : "./views/city.html",
    controller : 'CityCtrl',
    resolve : {
      cityDetails : ['cacFindCountry', '$route', function(cacFindCountry, $route) {
       var countryCode = $route.current.params.countryCode;
        return cacFindCountry(countryCode);
      }],
      countryNeighbors : ['cacFindNeighbors', '$route', function(cacFindNeighbors, $route) {
        var countryCode = $route.current.params.countryCode;
        return cacFindNeighbors(countryCode);
      }],
      countryDetails : ['$rootScope', '$route', function($rootScope, $route) {
        var countryIndex = arrayObjectIndexOf($rootScope.countries, $route.current.params.countryCode);
        return $rootScope.countries[countryIndex];
      }]
    }
  });
}]);

viewsModule.controller('CityCtrl', ['countryNeighbors', 'countryDetails', '$scope', 'cityDetails',function(countryNeighbors, countryDetails, $scope,   cityDetails ) {

  $scope.city = cityDetails[0];

  $scope.country = countryDetails;

  $scope.neighbors = countryNeighbors;
 
  // $scope.forecast = _.map(cityDetails.list, function(item) {
  //   item.dt_txt = Date.parse(item.dt_txt);
  //   return item;
  // });
}])

function arrayObjectIndexOf(arr, testCode){
    for(var i = 0; i < arr.length; i++){
        if (arr[i].countryCode == testCode) {
          return i;
        }
    };
    return -1;
}