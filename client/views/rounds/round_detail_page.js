Template.roundDetailPage.helpers({
	currentRound: function() {
		if  (!!Session.get('currentRoundId'))  {
			return Rounds.findOne( {_id: Session.get('currentRoundId')} );
		} else if (!!Session.get('currentRoundNum')) {
			return Rounds.findOne( {roundNum: parseInt(Session.get('currentRoundNum')) } );
		}
	}
});