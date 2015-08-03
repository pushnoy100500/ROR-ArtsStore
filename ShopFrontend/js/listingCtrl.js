
function ListingCtrl(catalogue, $http) {
	this.catalogue = catalogue;
	this.cart = [];
	this.http = $http;
}
ListingCtrl.prototype.addToCart = function(item){
	this.cart.push({id: item.id});
	sessionStorage.setItem('cart', JSON.stringify(this.cart));
};
ListingCtrl.prototype.deleteFromCart = function(item){
	for (var i = 0; i < this.cart.length; i++) {
		if(this.cart[i].id === item.id) {
			this.cart.splice(i, 1);
			break;
		}
	}
	sessionStorage.setItem('cart', JSON.stringify(this.cart));
};

ListingCtrl.prototype.sendCart = function(){
	var cartToSend = {
		"cart": this.cart
	}
	this.http.post('http://localhost:3000/orders.json', cartToSend).
  	success(function(data, status, headers, config) {
    console.log(data);
    console.log('success');
   sessionStorage.setItem('order_token', JSON.stringify(data));

  }).
  error(function(data, status, headers, config) {
    console.log(data);
    console.log('error');
  });
};
ListingCtrl.prototype.toggleCheckout = function(){
	alert('hi');
	var ch = document.getElementById("checkout");
	console.log(ch);
};

ListingCtrl.prototype.logShit = function(){
	console.log(sessionStorage.getItem('cart'));
};

app.controller('ListingCtrl', ListingCtrl);

