function dismissedPlayer(deliveriesArray) {
    if (deliveriesArray !== undefined) {
        let playersDismissed = {}

        for (let deliveries of deliveriesArray) {
            let playerName = deliveries["player_dismissed"]
            let dismissedBy = deliveries["fielder"]

            if (playerName != "" && dismissedBy != "") {
                if (playersDismissed[playerName] == undefined) {
                    playersDismissed[playerName] = 1
                }
                else {
                    playersDismissed[playerName] += 1
                }
            }

        }

        let maxDismissed = Math.max(...Object.values(playersDismissed))

        for (let players in playersDismissed) {
            if (playersDismissed[players] == maxDismissed) {
                return { "dismissedPlayer": players, "dismissalTime": maxDismissed }
            }
        }

    }
    return {}
}
module.exports = dismissedPlayer