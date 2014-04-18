Template.singleBox.helpers({
	detailsBoxLink: function() {
		a={};
		a.details=this.payoutdetails;
		// ZZZZZ do processing on details, e.g. convert to a text narrative, breaking out components of payout
		return a.details;
	} ,
	failure: function() {
		a=this.failYN==true;
		return a;
	} ,
	insured: function() {
		a=this.insuredYN==true;
		return a;
	}


});