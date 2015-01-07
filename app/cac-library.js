angular.module('cacLibrary',[])
	.constant('CAC_API_PREFIX','http://api.geonames.org')
  	.constant('CAC_API_SUFFIX', 'username=skauyedauty')
  	.constant('CAC_COUNTRY_INFO_PATH', '/countryInfo?')

  	.constant('CAC_NEIGHBORS', '/neighboursJSON?country={{ countryCode }}')
  	.constant('CAC_SEARCH', '/searchJSON?country={{ countryCode }}&featureCode=PPLC')

	.factory('cacCountries',['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 'CAC_COUNTRY_INFO_PATH', function($http, $q, CAC_API_PREFIX, CAC_API_SUFFIX, CAC_COUNTRY_INFO_PATH) {
		return function() {
			var defer = $q.defer();
			$http.get(CAC_API_PREFIX+CAC_COUNTRY_INFO_PATH+CAC_API_SUFFIX, {
				cache: true })
			.success(function(countries) {
		  // var x2js = new X2JS();
          // var json = x2js.xml_str2json( countries );
          // defer.resolve(json.geonames.country);
          defer.resolve(countries);
				console.log('yes!!!')
			});
			return defer.promise;
		}
	}])

	// .factory('cacNeighbors',['$http', '$q', 'CAC_Neighbors', function($http, $q,CAC_Neighbors) {

	// }])

	// .factory('cacSearch',['$http', '$q','CAC_search', function($http, $q,CAC_search) {

	// }])

	


