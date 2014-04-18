Template.singleBox.helpers({
	detailsBoxLink: function() {
		a={};
		a.details=this.payoutdetails;
		// ZZZZZ do processing on details, e.g. convert to a text narrative, breaking out components of payout
		return a.details;
	} ,
	failure: function() {
		a=this.failYN=="Y";
		return a;
	} ,
	insured: function() {
		a=this.insuredYN=="Y";
		return a;
	}

});