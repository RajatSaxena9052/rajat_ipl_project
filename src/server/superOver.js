function superOver(deliveriesArray) {
    if (deliveriesArray == undefined || deliveriesArray.length == 0 || Array.isArray(deliveriesArray) == false) {
        return {}
    }
    else {
        let superOverMatchPlayer = {}

        for (let delivery of deliveriesArray) {
            let superOver = delivery["is_super_over"]

            if (superOver > 0) {
                let superOverBowler = delivery["bowler"]
                let superOverRuns = delivery["total_runs"]

                if (superOverMatchPlayer[superOverBowler] == undefined) {
                    superOverMatchPlayer[superOverBowler] = { "runsGiven": parseInt(superOverRuns), "bowls": 1 }
                } else {
                    superOverMatchPlayer[superOverBowler]["runsGiven"] += parseInt(superOverRuns)
                    superOverMatchPlayer[superOverBowler]["bowls"] += 1
                }
            }
        }

        let minimumEconomy = null, bestBowler = "";

        for (let bowler in superOverMatchPlayer) {
            let runsGiven = superOverMatchPlayer[bowler]["runsGiven"]
            let overs = superOverMatchPlayer[bowler]["bowls"] / 6
            let economy = runsGiven / overs

            if (minimumEconomy == null) {
                minimumEconomy = economy
            }
            else if (minimumEconomy > economy) {
                minimumEconomy = economy
                bestBowler = { "bowler": bowler, "economy": minimumEconomy }
            }
        }

        return bestBowler
    }

}
module.exports = superOver