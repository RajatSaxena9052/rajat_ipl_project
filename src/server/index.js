const csv = require("csvtojson");
const fs = require('fs');
const matchesFilePath = "../data/matches.csv"
const deliveriesFilePath = "../data/deliveries.csv"
const matchesPlayedPerYear = require("./matchesPlayedPerYear")
const matchesWonPerTeamPerYear = require("./matchesWonPerTeamPerYear");

const path1 = "../public/output/matchesPerYear.json"

function main() {
    csv()
        .fromFile(matchesFilePath)
        .then((matches) => {
            csv()
                .fromFile(deliveriesFilePath)
                .then((deliveries) => {
                    let result1 = matchesPlayedPerYear(matches)
                    let result2 = matchesWonPerTeamPerYear(matches)
                    console.log(result2)
                    convertAndSave(result1)
                })
        })
}
function convertAndSave(data) {
    data = JSON.stringify(data)
    fs.writeFile(path1, data, 'utf8' , (e) => {
        if(e){
            return e
        }
    })/*.writeFile(path1, data, 'utf8' , (e) => {
        if(e){
            return e
        }
    })*/
}
main()