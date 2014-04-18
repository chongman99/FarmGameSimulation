Template.newGame.helpers({
  testOfReadingRules: function() {
  	a=Session.get("currentGameParameters");
  	return a.testOfReadingRules == "yes";
  }
});