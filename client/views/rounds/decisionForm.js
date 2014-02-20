Template.decisionForm.events({
	'submit form': function(e) {
		e.preventDefault();

		console.log('running form submit')

		fail=Random.fraction()<0.2; //this is the "crop failure" move by nature
		decision = $(e.target).find('input:radio[name="insuranceDecision"]:checked()').val();

		if (decision == "BuyInsurance" ) {
			payout = 0.65;
		} else {
			fail==true? payout=0:payout=1;
		}

		z=Session.get('currentRoundNum');

		var round = {
			userid: 'NewGuy',
			roundNum: z,
			failYN: fail,
			insuredYN: (decision == "BuyInsurance" ),
			payout: payout,
			completedYN: 'Y',
			payoutDetails: 'none',
			starttime: new Date(2014,5,5,5,5,5),
			endtime: new Date(2014,5,5,6,6,6)
		}

		a= Rounds.insert(round);
		console.log(a)	;	


		n=Session.get('currentRoundNum');
		Session.set('currentRoundNum',n+1);
		Meteor.Router.to('resultsAndNext');

	}
});