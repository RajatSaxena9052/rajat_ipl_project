const csv = require("csvtojson");
const fs = require('fs');
const matchesFilePath = "src/data/matches.csv"
const deliveriesFilePath = "src/data/deliveries.csv"

const matchesPlayedPerYear = require("./matchesPlayedPerYear")
const matchesWonPerTeamPerYear = require("./matchesWonPerTeamPerYear");
const extraRunsConcededPerTeam2016 = require("./extraRunsConcededPerTeam2016");
const top10EconomicalBowlers2015 = require("./top10EconomicalBowlers2015");
const teamsWonTossMatch = require("./teamsWonTossMatch");
const playerOfMatch = require("./playerOfMatch")
const batsmanStrikeRate = require("./batsmanStrikeRate")
const dismissedPlayer = require("./dismissedPlayer")
const superOver = require("./superOver")

function main() {
    csv()
        .fromFile(matchesFilePath)
        .then((matches) => {
            csv()
                .fromFile(deliveriesFilePath)
                .then((deliveries) => {

                    let result1 = matchesPlayedPerYear(matches)
                    let result2 = matchesWonPerTeamPerYear(matches)
                    let result3 = extraRunsConcededPerTeam2016(matches, deliveries)
                    let result4 = top10EconomicalBowlers2015(matches, deliveries)
                    let result5 = teamsWonTossMatch(matches)
                    let result6 = playerOfMatch(matches)
                    let result7 = batsmanStrikeRate(matches, deliveries)
                    let result8 = dismissedPlayer(deliveries)
                    let result9 = superOver(deliveries)

                    convertAndSave(result1, result2, result3, result4, result5, result6, result7, result8, result9)
                })
        })
}

function convertAndSave(data1, data2, data3, data4, data5, data6, data7, data8, data9) {

    data1 = JSON.stringify(data1)
    data2 = JSON.stringify(data2)
    data3 = JSON.stringify(data3)
    data4 = JSON.stringify(data4)
    data5 = JSON.stringify(data5)
    data6 = JSON.stringify(data6)
    data7 = JSON.stringify(data7)
    data8 = JSON.stringify(data8)
    data9 = JSON.stringify(data9)

    fs.writeFile("src/public/output/matchesPerYear.json", data1, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile matchesPerYear.json is created")
    })
    fs.writeFile("src/public/output/matchesWonPerTeam.json", data2, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile matchesWonPerTeam.json is created")
    })
    fs.writeFile("src/public/output/extraRuns2016.json", data3, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile extraRuns2016.json is created")

    })
    fs.writeFile("src/public/output/economicalBowlers2015.json", data4, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile economicalBowlers2015.json is created")

    })
    fs.writeFile("src/public/output/teamsWonTossMatch.json", data5, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile teamsWonTossMatch.json is created")

    })
    fs.writeFile("src/public/output/playerOfMatch.json", data6, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile playerOfMatch.json is created")

    })
    fs.writeFile("src/public/output/strikeRate.json", data7, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile strikeRate.json is created")

    })
    fs.writeFile("src/public/output/highestDismissedPlayer.json", data8, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile highestDismissedPlayer.json is created")

    })
    fs.writeFile("src/public/output/bestSuperOverBowler.json", data9, 'utf8', (error) => {
        if (error) {
            return error
        }
        console.log("outputfile bestSuperOverBowler.json is created")
    })

}

main()