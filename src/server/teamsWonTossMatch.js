function teamsWonTossMatch(matchArray) {
    if (matchArray !== undefined) {
        let teams = new Set()

        for (let matchId of matchArray) {
            teams.add(matchId["team1"])
            teams.add(matchId["team2"])
        }

        let teamsWon = {}

        for (var team of teams) {
            let count = 0

            for (var matchId of matchArray) {
                if (matchId["toss_winner"] == team && matchId["winner"] == team) {
                    count++
                }
            }

            teamsWon[team] = count
        }

        return teamsWon
    }

    return {}

}
module.exports = teamsWonTossMatch