function matchesWonPerTeamPerYear(matchesArray) {
    if (matchesArray !== undefined) {
        let matchesWonPerTeamAndYear = {};

        for (let matches of matchesArray) {
            let matchSeason = matches['season'];
            let winnerTeamName = matches["winner"];

            if (matchesWonPerTeamAndYear[matchSeason] != undefined) {
                matchesWonPerTeamAndYear[matchSeason].push(winnerTeamName);
            } else {
                matchesWonPerTeamAndYear[matchSeason] = [winnerTeamName];
            }

        }

        for (let season in matchesWonPerTeamAndYear) {
            let teams = {};

            matchesWonPerTeamAndYear[season].forEach(s => teams[s] = (teams[s] || 0) + 1);
            matchesWonPerTeamAndYear[season] = teams;
        }

        return matchesWonPerTeamAndYear;
    }

    return {};
}
module.exports = matchesWonPerTeamPerYear;