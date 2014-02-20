Meteor.publish('rounds', function() {
	return Rounds.find();
});

Meteor.publish('gameInitializations', function() {
	return GameInitializations.find();
});