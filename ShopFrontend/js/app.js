var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
        templateUrl: 'templates/main.html',
        controller: 'ListingCtrl as ctrl',
        resolve: {
        catalogue: function($http) {
        	 var req = {
            method: "GET",
            url: "https://mock-login-server.herokuapp.com/api/user"
	          }

        	}
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
});