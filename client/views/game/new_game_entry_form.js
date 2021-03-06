Template.newGameEntryForm.events({
	sessionInitialization: function() {
		Session.set('checkCompleted' , false); 
		Cookie.remove('currentGameSet');
		Cookie.remove('currentGameParameters');
		
		if (!!Cookie.get('farmGameCookie')) {
			ZZZZZlastround=0; //STUBBED: Look this up in the tables for this farmGameCookie.
			if (ZZZZZlastround==0) {
				alert("go directly to game. you never played yet");
				//lookup the cookie in the GameInitializations. Grab the gameSet. Set the Session env variables.
				//if not gameSet
			}
			else {
				alert("You already played a game or did not complete your current game.");
				// If completed, 
			}
		}
		else {
			Cookie.set( 'farmGameCookie', Random.id() );
			Session.set('currentRoundNum',0);
		}
	}, 

	'submit form': function(e) {
		e.preventDefault();

		enteredGameSet = {
		  gameId: $(e.target).find('[name="gameId"]').val(),
		  entryPassword: $(e.target).find('[name="entryPassword"]').val()
		};

		//validates the game parameters
		if ( !!GameIds.findOne({gameSet:enteredGameSet}) ) {
			if (!GameIds.findOne({gameSet:enteredGameSet}).closed) {  
				Session.set('currentGameSet', enteredGameSet)
				myClientIP = headers.getClientIP();
				GameInitializations.insert({
					gameSet: enteredGameSet,
					cookieId: Cookie.get('farmGameCookie'),
					IP : myClientIP
				});
				Session.set('currentGameParameters', GameIds.findOne({gameSet:enteredGameSet}).gameParameters);
				Meteor.Router.to('newGame');
			}
			else {
				alert("This game is closed. If you came from Amazon Turk, this game is no longer accepting submissions, please return the HIT.");
				window.location.replace("http://google.com")
			}
		}
		else {
			alert("This game does not exist. Please reenter crednetials.");
			Meteor.Router.to('newGameEntryForm');
		}

// At the end of this, there should be Session variables:   [gameSet and ZZZZZlastround=0] and a Cookie

	}
});