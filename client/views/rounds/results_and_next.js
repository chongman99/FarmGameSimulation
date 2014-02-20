Template.resultsAndNext.helpers({
	currentRound: function() {
		return Rounds.findOne( {roundNum: parseInt(Session.get('currentRoundNum'))-1 } ); // the -1 is a temporary hack dealing with
		// the fact that Session variable is incremented too soon. Better to increment AFTER the next click.
	}	,
	zzztemp: function() {
		console.log("zzztemp");
		return 5;
	} ,
	completedRound: function() {
		// returns whether the currentRound was completed. This is buggy. ZZZZZ may not be needed.
		roundFound = Rounds.findOne( {roundNum: parseInt(Session.get('currentRoundNum')) } );
		if (!!roundFound) {
			console.log("completedRound: " + !!roundFound.completedYN + " in round" + Session.get('currentRoundNum') );
			return (!!roundFound.completedYN);
		}
		else {
			console.log("completedRound: " + "Round not found.");
			return false;
		}
	}
});
