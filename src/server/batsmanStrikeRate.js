function batsmanStrikeRate(matchesArray, deliveriesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false || deliveriesArray == undefined || deliveriesArray.length == 0 || Array.isArray(deliveriesArray) == false) {
        return {}
    } else {
        let years = {}

        for (let matches of matchesArray) {
            let year = matches["season"]
            let matchId = matches["id"]

            if (years[year] == undefined) {
                years[year] = [matchId]
            } else {
                years[year].push(matchId)

            }
        }

        for (let season in years) {
            let batsman = {}
            let id = years[season][0]

            for (let deliveries of deliveriesArray) {
                if (deliveries["match_id"] != id) {
                    continue
                } else {
                    batsman[deliveries["batsman"]] = { "bowls": 0, "runs": 0 }
                    break
                }
            }

            let name = Object.keys(batsman)[0]

            for (let id of years[season]) {
                for (let deliveries of deliveriesArray) {
                    if (deliveries["match_id"] == id && deliveries["batsman"] == name) {
                        batsman[name]["bowls"] += 1
                        batsman[name]["runs"] += parseInt(deliveries["batsman_runs"])
                    }
                }
            }
            batsman[name]["strikeRate"] = ((batsman[name]["runs"] / batsman[name]["bowls"]) * 100).toFixed(3)
            years[season] = batsman
        }

        return years
    }
}
module.exports = batsmanStrikeRate