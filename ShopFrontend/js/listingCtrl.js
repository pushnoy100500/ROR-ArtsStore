function ListingCtrl(ListingService) {
	this.name = "hey";
	this.catalogue = []
	this.listingService = ListingService;
}
ListingCtrl.prototype.method_name = function(){
	/* body... */
};

app.controller("ListingCtrl", ListingCtrl);