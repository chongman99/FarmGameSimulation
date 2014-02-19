Template.roundItem.helpers({
	detailsTestLink: function() {
		a={};
		a.details=this.payoutdetails;
		// ZZZZZ do processing on details, e.g. convert to a text narrative, breaking out components of payout
		return a.details;
	}
});