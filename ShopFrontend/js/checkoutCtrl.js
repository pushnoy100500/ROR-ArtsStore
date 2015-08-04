
function ListingCtrl(catalogue, $http) {
	this.catalogue = catalogue;
	this.cart = [];
	this.total = 0;
	this.displayCart = [];
	this.http = $http;
	this.active = "";
}

app.controller('ListingCtrl', ListingCtrl);