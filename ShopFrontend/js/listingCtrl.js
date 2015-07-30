
function ListingCtrl(catalogue) {
	this.catalogue = catalogue;
}
ListingCtrl.prototype.logShit = function(){
	console.log(this.catalogue);
};
app.controller('ListingCtrl', ListingCtrl);

