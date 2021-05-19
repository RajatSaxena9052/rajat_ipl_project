function top10EconomicalBowlers2015(matchArray, deliveriesArray) {
    if (matchArray == undefined || matchArray.length == 0 || Array.isArray(matchArray) == false || deliveriesArray == undefined || deliveriesArray.length == 0 || Array.isArray(deliveriesArray) == false) {
        return {}
    } else {
        let matchId = new Set()
        for (var match of matchArray) {
            if (match["season"] == 2015) {
                matchId.add(match["id"])
            }
        }

        let bowlers = new Set()
        for (var id of matchId) {
            for (var deliveries of deliveriesArray) {
                if (deliveries["match_id"] == id) {
                    bowlers.add(deliveries["bowler"])
                }
            }
        }

        let economy = {};
        for (var bowler of bowlers) {
            let totalRuns = 0, bowls = 0
            for (let i of deliveriesArray) {
                if (matchId.has(i["match_id"]) === true && i["bowler"] == bowler) {
                    totalRuns += parseInt(i["total_runs"])
                    bowls++
                }
            }
            bowls = bowls / 6
            economy[bowler] = Math.floor(totalRuns / bowls)
        }

        economy = Object.entries(economy).sort((a, b) => a[1] - b[1]).slice(0, 10).reduce((a, c) => {
            a[c[0]] = c[1]
            return a
        }, {})

        return economy
    }
}
module.exports = top10EconomicalBowlers2015;