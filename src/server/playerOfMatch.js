function PlayerOfMatch(matchesArray) {
    if (matchesArray !== undefined) {
        let year = new Set();

        for (let matches of matchesArray) {
            year.add(matches["season"]);
        }

        let topPerformer = {};

        for (let season of year) {
            let playerScore = {};

            for (let match of matchesArray) {

                if (season == match["season"]) {

                    if (playerScore[match["player_of_match"]] == undefined) {
                        playerScore[match["player_of_match"]] = 1;
                    } else {
                        playerScore[match["player_of_match"]] += 1;
                    }

                }

            }

            let maxValue = Math.max(...Object.values(playerScore));

            for (let player in playerScore) {

                if (playerScore[player] === maxValue) {
                    topPerformer[season] = player;
                    break;
                }

            }

        }

        return topPerformer;
    }
    return {};

}
module.exports = PlayerOfMatch;