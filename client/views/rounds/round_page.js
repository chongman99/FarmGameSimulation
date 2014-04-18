var context = {moveStage: "MoveWithNotifications"}

Template.roundPage.helpers({
	
	initialize: function() {
		Session.set('stageOrder',  
			[ "IncrementRound", 
				"BeforeMoveGuess",
			  "MoveWithNotifications",
			  "SingleResultDisplay",
			  "RoundComplete"] );
					//ZZZZZ currently hardcoded, normally generate this in game initialization
		//	Can't do the following. Because of reactivity, this is an infinite loop
		// Session.set('currentRoundNum',Session.get('currentRoundNum')+1);
		Session.set("currentStage","MoveWithNotifications")
	} ,

	IncrementRoundJS: function() {
		x=Rounds.find();  // Template: Rounds.find().map(function(qq) {return qq.roundNum;} )
		z=1;
		Session.set('altCurrentRoundNumber',z);
	} ,

  checkstage: function(stageName) {
  	a=Session.get("currentStage");
  	return stageName;
  } ,

	currentStageBeforeMoveGuess: function() {
		a=Session.get("currentStage");
		return a == "BeforeMoveGuess";
	} ,

	currentStageMoveWithNotifications: function() {
		a=Session.get("currentStage");
		return a == "MoveWithNotifications";
	} ,

	currentStageAfterMoveGuess: function() {
		a=Session.get("currentStage");
		return a == "AfterMoveGuess";
	} ,

	currentStageSingleResultDisplay: function() {
		a=Session.get("currentStage");
		return a == "SingleResultDisplay";	
	} ,

	currentStageRoundComplete: function() {
		a=Session.get("currentStage");
		return a == "RoundComplete";	
	} 


});