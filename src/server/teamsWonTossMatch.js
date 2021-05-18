function teamsWonTossMatch(matchArray) {
    if (matchArray == undefined || matchArray.length == 0 || Array.isArray(matchArray) == false) {
        return {}
    }
    else {
        let teams = new Set()
        for (let matches of matchArray) {
            teams.add(matches["team1"])
            teams.add(matches["team2"])
        }
        let teamWon = {}
        for (var team of teams) {
            let count = 0
            for (var matches of matchArray) {
                if (matches["toss_winner"] == team && matches["winner"] == team) {
                    count++
                }
            }
            teamWon[team] = count
        }
        return teamWon
    }
}
module.exports = teamsWonTossMatch;