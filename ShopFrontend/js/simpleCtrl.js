function SimpleCtrl($http){
	this.variable = "hello world!";
	this.$http = $http;
}
SimpleCtrl.prototype.getStuff = function($http){
	    console.log('here');

	$http.get('http://45.55.83.78/users').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('error');
  });
};

angular.module('App').controller('SimpleCtrl', SimpleCtrl);