
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
SimpleCtrl.prototype.getStuff = function($http){
	    console.log('here');

angular.module('App').controller('SimpleCtrl', SimpleCtrl);


