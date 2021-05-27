function matchesPlayedPerYear(matchesArray) {
    if (matchesArray !== undefined) {
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
    return {}
}
module.exports = matchesPlayedPerYear