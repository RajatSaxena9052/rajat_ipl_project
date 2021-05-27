const csvToJson = require("csvtojson");
const fs = require('fs');

const matches = "src/data/matches.csv";
const deliveries = "src/data/deliveries.csv";

const matchesPlayedPerYear = require("./matchesPlayedPerYear");
const matchesWonPerTeamPerYear = require("./matchesWonPerTeamPerYear");
const extraRunsConcededPerTeam2016 = require("./extraRunsConcededPerTeam2016");
const top10EconomicalBowlers2015 = require("./top10EconomicalBowlers2015");
const teamsWonTossMatch = require("./teamsWonTossMatch");
const playerOfMatch = require("./playerOfMatch");
const batsmanStrikeRate = require("./batsmanStrikeRate");
const dismissedPlayer = require("./dismissedPlayer");
const superOver = require("./superOver");

function main() {
    csvToJson()
        .fromFile(matches)
        .then((matches) => {
            csvToJson()
                .fromFile(deliveries)
                .then((deliveries) => {

                    let calculatedValues = {
                        matchPlayedPerYear: matchesPlayedPerYear(matches),
                        matchWonPerTeam: matchesWonPerTeamPerYear(matches),
                        extraRuns: extraRunsConcededPerTeam2016(matches, deliveries),
                        tenEconomicPlayer: top10EconomicalBowlers2015(matches, deliveries),
                        wonTossAndMatch: teamsWonTossMatch(matches),
                        winnerOfPlayerOfMatch: playerOfMatch(matches),
                        strikeRate: batsmanStrikeRate(matches, deliveries),
                        playerDismissed: dismissedPlayer(deliveries),
                        superOverEconomy: superOver(deliveries)
                    };

                    convertAndSave(calculatedValues);
                });
        });
}

function convertAndSave({ matchPlayedPerYear, matchWonPerTeam, extraRuns, tenEconomicPlayer, wonTossAndMatch, winnerOfPlayerOfMatch, strikeRate, playerDismissed, superOverEconomy }) {

    fs.writeFile("src/public/output/matchesPerYear.json", JSON.stringify(matchPlayedPerYear, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile matchesPerYear.json is created");
        }
    });

    fs.writeFile("src/public/output/matchesWonPerTeam.json", JSON.stringify(matchWonPerTeam, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile matchesWonPerTeam.json is created");
        }
    });

    fs.writeFile("src/public/output/extraRuns2016.json", JSON.stringify(extraRuns, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile extraRuns2016.json is created");
        }
    });

    fs.writeFile("src/public/output/economicalBowlers2015.json", JSON.stringify(tenEconomicPlayer, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile economicalBowlers2015.json is created");
        }
    });

    fs.writeFile("src/public/output/teamsWonTossMatch.json", JSON.stringify(wonTossAndMatch, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile teamsWonTossMatch.json is created");
        }
    });

    fs.writeFile("src/public/output/playerOfMatch.json", JSON.stringify(winnerOfPlayerOfMatch, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile playerOfMatch.json is created");
        }
    });

    fs.writeFile("src/public/output/strikeRate.json", JSON.stringify(strikeRate, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile strikeRate.json is created");
        }
    });

    fs.writeFile("src/public/output/highestDismissedPlayer.json", JSON.stringify(playerDismissed, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile highestDismissedPlayer.json is created");
        }
    });

    fs.writeFile("src/public/output/bestSuperOverBowler.json", JSON.stringify(superOverEconomy, null, 2), 'utf8', (error) => {
        if (error) {
            return error;
        } else {
            console.log("outputfile bestSuperOverBowler.json is created");
        }
    });

}

main();