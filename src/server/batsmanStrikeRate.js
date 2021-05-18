function batsmanStrikeRate(matchesArray, deliveriesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false || deliveriesArray == undefined || deliveriesArray.length == 0 || Array.isArray(deliveriesArray) == false) {
        return {}
    } else {
        let year = {}
        for (let matches of matchesArray) {
            if (year[matches["season"]] == undefined) {
                year[matches["season"]] = [matches["id"]]
            } else {
                year[matches["season"]].push(matches["id"])

            }
        }
        //console.log(year)
        for (let season in year) {
            let batsman = {}
            let id = year[season][0]
            //console.log(id)

            for (let deliveries of deliveriesArray) {
                if (deliveries["match_id"] != id) {
                    continue
                } else {
                    batsman[deliveries["batsman"]] = { "bowls": 0, "runs": 0 }
                    break;
                }
            }
            let name = Object.keys(batsman)[0]
            //console.log(name, id, season)
            for (let id of year[season]) {
                for (let deliveries of deliveriesArray) {
                    if (deliveries["match_id"] == id && deliveries["batsman"] == name) {
                        batsman[name]["bowls"] += 1
                        batsman[name]["runs"] += parseInt(deliveries["batsman_runs"])
                    }
                }
            }
            batsman[name]["strikeRate"] = ((batsman[name]["runs"] / batsman[name]["bowls"]) * 100).toFixed(3)
            year[season] = batsman
        }

        return year
    }
}
module.exports = batsmanStrikeRate;