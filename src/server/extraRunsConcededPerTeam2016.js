function extraRunsConcededPerTeam2016(matchArray, deliveriesArray) {
    if (matchArray !== undefined && deliveriesArray !== undefined) {
        let matchId = new Set()

        for (let match of matchArray) {
            if (match["season"] == 2016) {
                matchId.add(match["id"])
            }
        }

        let extraRunsByTeams = {}

        for (let id of matchId) {
            for (let deliveries of deliveriesArray) {
                if (deliveries['match_id'] == id) {

                    if (extraRunsByTeams[deliveries['batting_team']] != undefined) {
                        extraRunsByTeams[deliveries['batting_team']] += parseInt(deliveries['extra_runs'])
                    } else {
                        extraRunsByTeams[deliveries['batting_team']] = parseInt(deliveries['extra_runs'])
                    }

                }
            }
        }

        return extraRunsByTeams
    }
    return {}
}
module.exports = extraRunsConcededPerTeam2016