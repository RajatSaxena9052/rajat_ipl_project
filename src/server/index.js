const csv = require("csvtojson");
const matchesFilePath = "../data/matches.csv"
const deliveriesFilePath = "../data/deliveries.csv"
const matchesPlayedPerYear = require("./matchesPlayedPerYear")

function main() {
    csv()
        .fromFile(matchesFilePath)
        .then((matches) => {
            csv()
                .fromFile(deliveriesFilePath)
                .then((deliveries) => {
                    console.log(matchesPlayedPerYear(matches))
                })
        })
}

main()