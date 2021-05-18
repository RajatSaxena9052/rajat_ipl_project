const csv = require("csvtojson");
const fs = require('fs');
const matchesFilePath = "../data/matches.csv"
const deliveriesFilePath = "../data/deliveries.csv"
const matchesPlayedPerYear = require("./matchesPlayedPerYear")
const matchesWonPerTeamPerYear = require("./matchesWonPerTeamPerYear");

const path1 = "../public/output/matchesPerYear.json"
const path2 = "../public/output/matchesWonPerTeam.json"

function main() {
    csv()
        .fromFile(matchesFilePath)
        .then((matches) => {
            csv()
                .fromFile(deliveriesFilePath)
                .then((deliveries) => {
                    let result1 = matchesPlayedPerYear(matches)
                    let result2 = matchesWonPerTeamPerYear(matches)
                    //console.log(result2)
                    convertAndSave(result1, result2)
                })
        })
}
function convertAndSave(data1, data2) {
    data1 = JSON.stringify(data1)
    data2 = JSON.stringify(data2)
    fs.writeFile(path1, data1, 'utf8', (error) => {
        if (error) {
            return error
        }
    })
    fs.writeFile(path2, data2, 'utf8', (error) => {
        if (error) {
            return error
        }
    })
}
main()