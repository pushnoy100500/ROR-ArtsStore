var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
        templateUrl: 'templates/main.html',
        controller: 'SimpleCtrl as ctrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
});