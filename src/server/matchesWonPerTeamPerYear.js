function matchesWonPerTeamPerYear(matchesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false) {
        return {}
    } else {
        let year = {};
        for (let matches of matchesArray) {
            if (year[matches['season']] != undefined) {
                year[matches['season']].push(matches["winner"])
            } else {
                year[matches['season']] = [matches["winner"]]
            }
        }
        for (var property in year) {
            let teams = {};
            year[property].forEach(s => teams[s] = (teams[s] || 0) + 1);
            year[property] = teams;
        }
        return year;
    }
}
module.exports = matchesWonPerTeamPerYear;