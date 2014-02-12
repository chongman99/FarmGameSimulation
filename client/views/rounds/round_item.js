Template.roundItem.helpers({
	detailsTestLink: function() {
		var a=document.createElement('a');
		a.href=this.payoutdetails;
		return a.hostname
	}
});