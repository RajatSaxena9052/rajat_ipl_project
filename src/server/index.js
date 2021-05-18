const csv = require("csvtojson");
const matchesFilePath = "../data/matches.csv"
const deliveriesFilePath = "../data/deliveries.csv"

function main() {
    csv()
        .fromFile(matchesFilePath)
        .then((matches) => {
            csv()
                .fromFile(deliveriesFilePath)
                .then((deliveries) => {
                    console.log(matches[0],deliveries[0]);
                })
        })
}
main()