
function CheckoutCtrl($http) {
	this.cardNum = 'test';
}
CheckoutCtrl.prototype.saveCustomer = function(data){
	console.log(data);
};
CheckoutCtrl.prototype.logShit = function(){
	console.log(this.cardNum);
};

app.controller('CheckoutCtrl', CheckoutCtrl);