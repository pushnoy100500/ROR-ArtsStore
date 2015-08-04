
function ListingCtrl(catalogue, $http) {
	this.catalogue = catalogue;
	this.cart = [];
	this.total = 0;
	this.displayCart = [];
	this.http = $http;
	this.active = "";
	this.imageClass = "img-left";
}
ListingCtrl.prototype.addToCart = function(item){
	this.cart.push({id: item.id});
	this.displayCart.push(item);
	this.total += parseFloat(item.price);
	this.total = Math.round(this.total * 100) / 100
	console.log(this.cart);
	sessionStorage.setItem('cart', JSON.stringify(this.cart));
};
ListingCtrl.prototype.deleteFromCart = function(item){
	for (var i = 0; i < this.cart.length; i++) {
		console.log(this.cart[i]);
		if(this.cart[i].id === item.id) {
			this.total -= parseFloat(item.price);
			this.total = Math.round(this.total * 100) / 100
			this.cart.splice(i, 1);
			this.displayCart.splice(i, 1);
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
	var act = "checkout--active";
	if(this.active === act) {
		this.active = "";
	} else {
		this.active = act;
	}
};
ListingCtrl.prototype.toggleImage = function(){
	if(this.imageClass == "img-left") {
		this.imageClass = "img-right";
	} else {
		this.imageClass = "img-left";
	}
}
ListingCtrl.prototype.logShit = function(){
	console.log(sessionStorage.getItem('cart'));
};


app.controller('ListingCtrl', ListingCtrl);

