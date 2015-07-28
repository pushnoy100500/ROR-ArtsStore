function SimpleCtrl($http){
	this.variable = "hello world!";
	this.http = $http;
}

SimpleCtrl.prototype.getJSON = function()
{
	console.log("here")
	this.http.get('http://localhost:3000/products.json').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log(data);
	    console.log("success")
	  }).
	  error(function(data, status, headers, config) {
	  	console.log("error");
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

}

angular.module('App').controller('SimpleCtrl', SimpleCtrl);