function matchesPlayedPerYear(matchesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false) {
        return {}
    }
    let matchesPlayed = {}

    for (let matches of matchesArray) {
        let year = matches['season']

        if (matchesPlayed[year] != undefined) {
            matchesPlayed[year] += 1
        } else {
            matchesPlayed[year] = 1
        }
    }
    return matchesPlayed
}
module.exports = matchesPlayedPerYear