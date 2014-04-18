Template.decisionForm.events({
	'submit form': function(e) {
		console.log(e)
		e.preventDefault();

		console.log('running form submit')

		fail=Random.fraction()<0.2; //this is the "crop failure" move by nature
		decision = $(e.target).find('input:radio[name="insuranceDecision"]:checked()').val();
		decision1 = $(e.target).find('input:radio[name="insuranceDecision"]:checked()')
		decision2noval = $(e.target).find('input:radio[name="insuranceDecision",checked="true"]'); // didn't work
		$decision3= $('input[name="insuranceDecision"]'); // This is an element of the DOM. Without $, this is just a JS object.

// document.getElementByName("")  Stackoverflow 10306129.


		zz= $decision3.first();
    console.log("decision")
    console.log(decision)
    console.log(decision1)   
    console.log("decision2")
    console.log(decision2noval)
    console.log($decision3)
    console.log(zz)

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