var roundsData = [
	{
		userid: 'Howard',
		roundNum: 1,
		failYN: 'N',
		insuredYN: 'N',
		payout: 1,
		completedYN: 'Y',
		payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 2,
		failYN: 'Y',
		insuredYN: 'N',
		payout: 0,
		completedYN: 'Y',
		payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 3,
		failYN: 'Y',
		insuredYN: 'Y',
		payout: 0.8,
		completedYN: 'Y',
		payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 4,
		failYN: 'N',
		insuredYN: 'Y',
		payout: 0.8,
		completedYN: 'Y',
		payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 5,
		// failYN: Y ,
		// insuredYN: 'Y',
		// payout: 0.8,
		completedYN: 'N'
		// payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 6,
		// failYN: Y ,
		// insuredYN: 'Y',
		// payout: 0.8,
		completedYN: 'N'
		// payoutDetails: 'none'
	},
	{
		userid: 'Howard',
		roundNum: 7,
		// failYN: Y ,
		// insuredYN: 'Y',
		// payout: 0.8,
		completedYN: 'N'
		// payoutDetails: 'none'
	},
];
Template.roundsList.helpers({
	rounds: roundsData
});




