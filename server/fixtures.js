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


		Rounds.insert({
		userid: 'Howard',
		roundNum: 3,
		failYN: false,
		insuredYN: true,
		payout: 0.65,
		completedYN: 'Y',
		payoutDetails: 'none',
		starttime: new Date(2014,5,5,5,5,5),
		endtime: new Date(2014,5,5,6,6,6)
	});

	Rounds.insert({
		userid: 'Howard',
		roundNum: 4,
		failYN: false,
		insuredYN: false,
		payout: 0,
		completedYN: 'Y',
		payoutDetails: 'none',
		starttime: new Date(2014,6,5,5,5,5),
		endtime: new Date(2014,6,5,6,6,6)
	});

	for (var i=5;i<30;i++)
	{
		if (i%4==1)
		  {
		  	a=false;
		  }
		else
			{
				a=true;
			}
		if (i%3==1)
		  {
		  	b=false;
		  }
		else
			{
				b=true;
			}
		Rounds.insert({
			userid: 'Howard',
			roundNum: i,
			failYN: a,
			insuredYN: b,
			payout: 0.7,
			completedYN: 'Y',
			payoutDetails: 'none',
			starttime: new Date(2014,6,5,5,5,5),
			endtime: new Date(2014,6,5,6,6,6)
		});
	}


}

// allowableGameParams= {
//
// }

if (GameIds.find().count() === 0) {  
//beginner note: Rounds is the Collection name
	defaultGameSet= {
		  gameId: "XMYGAME",
		  entryPassword: "Xpassword"
	};

	GameIds.insert({
		gameSet: defaultGameSet,
 		closed: false,
 		gameParameters: {
 			gameDescription: "Sample gameDescription. This is exported when the results are saved to a file. The survey subject should not see anything here. ",
 			percentageFail: 	0.2,
 			costOfInsurance: 	0.35,
 			totalRounds: 			50,
 			instructionsGainOrLoss:   "gain",
 			resultsDiplayGraphical:   "yes",
 			resultsDisplayList: "yes",
 			moveDisplayMessage: "Many other people have chosen to buy insurance",
 			moveDisplayMessageFrequency: 10/10,
 			moveDisplayMessageInterval: "FixedFirst", // FixedFirst will display in round one, setcounter to 0, add moveDisplayMessageFrequency each round, and then display when this is greater than 1 and then subtract one. E.g., if Freq=0.2, it will display in round 1, 6, 11, etc. if Freq=0.3, it will display in round 1, 5, 8, 11, etc"
 																								// Random will mean displayed if random draw from [0,1] is < Freq. 			

 			opaqueOrTransperentProbability: "Transparent",
 			descriptionIfOpaque: "NA",

 			singleResultDisplayElementsChoice: "yes",
 			singleResultDisplayElementsFailSucceed: "yes",
 			singleResultDisplayElementsPayoff: "yes",
 			singleResultDisplayElementsSentence:  "You paid X for insurance. You are hence guaranteed $1 for this round. After paying for insurance, you earned 1-X.",


 			singleResultDisplayMessageFailUninsured_Regret: "If you had insured, you would have better earnings.", //leave blank if don't display
 			singleResultDisplayMessageSuccessUninsured_Congrats: "It was good you did not have insurance, because the insurance would have been wasted.",
 			singleResultDisplayMessageFailInsured_Congrats: "It was good you had insurance, otherwise the crop failure would have hurt your earning.",
 			singleResultDisplayMessageSuccessInsured_Regret: "If you had not insured, you would have better earnings.",
 
 			pickStyle: "Pick1",
 			testOfReadingRules: "yes"
 		}
	});

	GameIds.insert({
		gameSet: {gameId: "CLOSEDGAME", entryPassword: "CLOSEDGAME"},
 		closed: true
	});

}



/*
CheckGameParametersValid // ZZZZZ
run checks to make sure it's "yes" and not "YES" or "Y"
makes sure each of the game parameters are checked to make sure there are no entry typos

OPEOPE: ask him how to autopopulate a menu with options that come from a list.
*/