function matchesPlayedPerYear(matchesArray) {
    if (matchesArray == undefined || matchesArray.length == 0 || Array.isArray(matchesArray) == false) {
        return {}
    }
    let result = {}
    for (let matches of matchesArray) {
        if (result[matches['season']] != undefined) {
            result[matches['season']] += 1
        } else {
            result[matches['season']] = 1
        }
    }
    return result
}
module.exports = matchesPlayedPerYear;