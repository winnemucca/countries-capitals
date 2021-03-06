angular.module('cacLibrary',[])
	.constant('CAC_API_PREFIX','http://api.geonames.org')
  	.constant('CAC_API_SUFFIX', 'username=skauyedauty')
  	.constant('CAC_COUNTRY_INFO_PATH', '/countryInfoJSON?')

  	.constant('CAC_NEIGHBORS', '/neighboursJSON?country={{ countryCode }}')
  	.constant('CAC_SEARCH', '/searchJSON?country={{ countryCode }}&featureCode=PPLC')

	.factory('cacCountries',['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 'CAC_COUNTRY_INFO_PATH', function($http, $q, CAC_API_PREFIX, CAC_API_SUFFIX, CAC_COUNTRY_INFO_PATH) {
		return function() {
			// q runs functions asyncronously
			var defer = $q.defer();
			$http.get(CAC_API_PREFIX+CAC_COUNTRY_INFO_PATH+CAC_API_SUFFIX, {
				cache: true })
			.success(function(countries) {

				console.log(countries);
         	 defer.resolve(countries.geonames);
			});
			return defer.promise;
		}
	}])

	// .factory('cacRequest', ['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', function($http,   $q,   CAC_API_PREFIX, CAC_API_SUFFIX) {
 //    return {
 //      getData: function(path) {
 //        var defer = $q.defer();
 //        $http.get(CAC_API_PREFIX + path + '&' + CAC_API_SUFFIX)
 //          .success(function(data) {
 //            defer.resolve(data.geonames);
 //            console.log('data: ',data);
 //          })
 //        return defer.promise;
 //      }
 //    };
 //  }])


	.factory('cacFindCountry',['cacRequest','$interpolate', '$q','CAC_search', function(cacRequest, $interpolate, $q,CAC_search) {
			return function(q) {
      var path;
      path = $interpolate(CAC_SEARCH)({
        countryCode : q
      });

      return cacRequest.getData(path);
    }

	}])

	

	.factory('cacFindNeighbors',    ['cacRequest', '$interpolate', 'CAC_NEIGHBORS',
                      function(cacRequest,   $interpolate,   CAC_NEIGHBORS ) {
    return function(q) {
      var path;
      path = $interpolate(CAC_NEIGHBORS)({
        countryCode : q
      });

      return cacRequest.getData(path);
    }
  }])



	


