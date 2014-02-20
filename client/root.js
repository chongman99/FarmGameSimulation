Template.clearCookie.helpers({
	redirectAndClearCookie: function() {
		Cookie.remove('farmGameCookie');
		Meteor.Router.to('newGame');
	}

});