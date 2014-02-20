Template.newGame.helpers({
	sessionInitialize: function () {
		// log the IP address
		myClientIP = headers.getClientIP();
		// set cookie for session if not available
		if (!Cookie.get('farmGameCookie')) {
			Cookie.set( 'farmGameCookie', Random.id() );
			GameInitializations.insert({
				cookieId: Cookie.get('farmGameCookie'),
				IP : myClientIP
			});
			Session.set('currentRoundNum',99);
		}
		// ZZZZZ Check if this cookie and/or IP have completed a simulation already. If so, set session key which 
		// will later display ineligibility.
		Session.set('checkCompleted' , false)  //need to write this this.
		// stick into initializations Collection
	}
});