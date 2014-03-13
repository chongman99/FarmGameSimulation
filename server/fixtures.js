if (Rounds.find().count() === 0) {  
//beginner note: Rounds is the Collection name
	Rounds.insert({
		userid: 'Howard',
		roundNum: 1,
		failYN: true,
		insuredYN: true,
		payout: 0.65,
		completedYN: 'Y',
		payoutDetails: 'none',
		starttime: new Date(2014,5,5,5,5,5),
		endtime: new Date(2014,5,5,6,6,6)
	});

	Rounds.insert({
		userid: 'Howard',
		roundNum: 2,
		failYN: true,
		insuredYN: false,
		payout: 0,
		completedYN: 'Y',
		payoutDetails: 'none',
		starttime: new Date(2014,6,5,5,5,5),
		endtime: new Date(2014,6,5,6,6,6)
	});

}


if (GameIds.find().count() === 0) {  
//beginner note: Rounds is the Collection name
	defaultGameSet= {
		  gameId: "XMYGAME",
		  entryPassword: "Xpassword"
	};

	GameIds.insert({
		gameSet: defaultGameSet,
 		closed: false
	});

	GameIds.insert({
		gameSet: {gameId: "CLOSEDGAME", entryPassword: "CLOSEDGAME"},
 		closed: true
	});

}





