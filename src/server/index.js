const csv = require("csvtojson");
const fs = require('fs');
const matchesFilePath = "../data/matches.csv"
const deliveriesFilePath = "../data/deliveries.csv"
const matchesPlayedPerYear = require("./matchesPlayedPerYear")
const matchesWonPerTeamPerYear = require("./matchesWonPerTeamPerYear");
const extraRunsConcededPerTeam2016 = require("./extraRunsConcededPerTeam2016");
const top10EconomicalBowlers2015 = require("./top10EconomicalBowlers2015");

const outputProblem1 = "../public/output/matchesPerYear.json"
const outputProblem2 = "../public/output/matchesWonPerTeam.json"
const outputProblem3 = "../public/output/extraRuns2016.json"
const outputProblem4 = "../public/output/economicalBowlers2015.json"

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
                    console.log(result4)

                    convertAndSave(result1, result2, result3)
                })
        })
}

function convertAndSave(data1, data2, data3) {
    data1 = JSON.stringify(data1)
    data2 = JSON.stringify(data2)
    data3 = JSON.stringify(data3)
    fs.writeFile(outputProblem1, data1, 'utf8', (error) => {
        if (error) {
            return error
        }
    })
    fs.writeFile(outputProblem2, data2, 'utf8', (error) => {
        if (error) {
            return error
        }
    })
    fs.writeFile(outputProblem3, data3, 'utf8', (error) => {
        if (error) {
            return error
        }
    })
}
main()