Meteor.Router.add({
	'/': 'newGameEntryForm',

	'/clearCookie': 'clearCookie',

	'/newGame': 'newGame',

	'/roundPage': 'roundPage',

	'/playGame': 'roundPage',

	'/resultsAndNext': 'resultsAndNext',

	'/testDisplayBoxes': 'testDisplayBoxes',

	'/singleBox': 'singleBox',

	'/roundsBoxHistory': 'roundsBoxHistory',

	'/roundById/:_id': {
		to: 'roundDetailPage',
		and: function(id) { Session.set('currentRoundId',id);  Session.set('monkey','john'); }
	} , 

	'/roundByNum/:_id': {
		to: 'roundDetailPage',
		and: function(id) { Session.set('currentRoundNum',id);  Session.set('monkey','carlos'); }
	} ,

	'/shortInstructions': {
		to: 'shortInstructions'
	}

});