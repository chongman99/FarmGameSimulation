Template.roundsBoxHistory.helpers({
	rounds: function() {
		return Rounds.find();
	},

    roundRows: function() {
        var rounds = Rounds.find();
        var roundRows = [];

        rounds.forEach(function(round){
            var index = round.roundNum - 1
            if(index % 10 == 0)
                roundRows.push([]);
            roundRows[Math.floor(index/ 10)].push(round);
        });
        return roundRows;
    }
});
