function top10EconomicalBowlers2015(matchArray, deliveriesArray) {
    if (matchArray !== undefined && deliveriesArray !== undefined) {
        let allMatchId = new Set();

        for (let match of matchArray) {
            if (match["season"] == 2015) {
                allMatchId.add(match["id"]);
            }
        }

        let allBowlerName = new Set();

        for (let id of allMatchId) {
            for (let deliveries of deliveriesArray) {
                if (deliveries["match_id"] == id) {
                    allBowlerName.add(deliveries["bowler"]);
                }
            }
        }

        let economy = {};

        for (let bowler of allBowlerName) {
            let totalRuns = 0, bowls = 0;

            for (let deliveryId of deliveriesArray) {
                let matchId = deliveryId["match_id"]
                let bowlerName = deliveryId["bowler"]

                if (allMatchId.has(matchId) === true && bowlerName == bowler) {
                    totalRuns += parseInt(deliveryId["total_runs"]);
                    bowls++;
                }
            }

            bowls = bowls / 6;
            economy[bowler] = Math.floor(totalRuns / bowls);
        }

        let Economy = Object.entries(economy)
            .sort((player1, player2) => player1[1] - player2[1])
            .slice(0, 10)
            .reduce((accumulator, playerName) => {
                accumulator[playerName[0]] = playerName[1]
                return accumulator
            }, {});

        return Economy;
    }

    return {}
}
module.exports = top10EconomicalBowlers2015