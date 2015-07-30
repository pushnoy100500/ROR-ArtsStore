function SimpleService($http)
{
  this.http = $http;
  this.name = [];
  this.image_url = [];
}

SimpleService.prototype.getImages = function()
{
	return this.http.get('http://localhost:3000/products.json');
}

angular.module('App').service('SimpleService', SimpleService);


// "id":1,
// "name":"Picture #1",
// "image_url":"dummy-icon.png",
// "price":"2.5",
// "user_id":1,
// "overview":"quick overview of the current picture",
// "specification":"dummy specification that is supposed to take more space than it is required",
// "url":"http://localhost:3000/products/1.json"