function SimpleCtrl(SimpleService)
{
	this.SimpleService = SimpleService;
	this.name = [];
	this.cart = [];
	
	var self = this;

	this.SimpleService.getImages().then(function(data) {
		self.name = data.data;
	});
}






angular.module('App').controller('SimpleCtrl', SimpleCtrl);

// SimpleCtrl.prototype.getJSON = function()
// {
// 	self = this;
// 	console.log("here")
// 	self.http.get('http://localhost:3000/products.json').
// 	  success(function(data, status, headers, config) {
// 	    // this callback will be called asynchronously
// 	    // when the response is available
// 	    console.log(data);
// 	    console.log("success")

// 	  }).
// 	  error(function(data, status, headers, config) {
// 	  	console.log("error");
// 	    // called asynchronously if an error occurs
// 	    // or server returns response with an error status.
	  	
// 	  });


// }

