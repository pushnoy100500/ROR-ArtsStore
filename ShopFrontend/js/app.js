var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl as ctrl'
        })
    .when('/store', {
        templateUrl: 'templates/store.html',
        controller: 'ListingCtrl as ctrl',
        resolve: {
        	catalogue: function($http, $q) {
	        	var req = {
	            method: "GET",
	            url: "http://localhost:3000/products.json",
        		}
        	var defer = $q.defer();
        	$http(req).success(function(data) {
        		console.log(data);
        		console.log('success');
        		defer.resolve(data);
        	}).error(function(data) {
        		console.log(data);
        	});
        	return defer.promise;
        }
    }
      })
    .when('/checkout', {
    	templateUrl: 'templates/checkout.html',
    	controller: 'CheckoutCtrl as ctrl'
    })
      .otherwise({
        redirectTo: '/home'
      });
});