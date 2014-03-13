Template.roundPage.helpers({
	initialize: function () {
		x=Rounds.find();
		z=1;
		Session.set('currentRoundNum',z);

	}
});