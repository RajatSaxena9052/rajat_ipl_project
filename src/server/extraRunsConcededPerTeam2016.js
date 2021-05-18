function extraRunsConcededPerTeam2016(matchArray, deliveriesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false || deliveriesArray == undefined || deliveriesArray.length == 0 || Array.isArray(deliveriesArray) == false) {
        return {}
    } else {
        let matchId = new Set()
        for (var match of matchArray) {
            if (match["season"] == 2016) {
                matchId.add(match["id"])
            }
        }
        let extraRunsByTeams = {}
        for (let id of matchId) {
            for (let deliveries of deliveriesArray) {
                if (deliveries['match_id'] == id) {
                    if (extraRunsByTeams[deliveries['batting_team']] != undefined) {
                        extraRunsByTeams[deliveries['batting_team']] += parseInt(deliveries['extra_runs']);
                    } else {
                        extraRunsByTeams[deliveries['batting_team']] = parseInt(deliveries['extra_runs']);
                    }
                }

            }
        }
        return extraRunsByTeams
    }
}
module.exports = extraRunsConcededPerTeam2016;