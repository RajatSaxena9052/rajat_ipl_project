function superOver(deliveriesArray) {
    if (deliveriesArray !== undefined) {
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

        let minimumEconomy = null, bestBowler = ""

        for (let bowler in superOverMatchPlayer) {
            let runsGiven = superOverMatchPlayer[bowler]["runsGiven"]
            let overs = superOverMatchPlayer[bowler]["bowls"] / 6
            let calculatedEconomy = runsGiven / overs

            if (minimumEconomy == null) {
                minimumEconomy = calculatedEconomy
            }
            else if (minimumEconomy > calculatedEconomy) {
                minimumEconomy = calculatedEconomy

                bestBowler = {
                    "bowlerName": bowler,
                    "economy": minimumEconomy
                }

            }
        }

        return bestBowler
    }

    return {}
}
module.exports = superOver