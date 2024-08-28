/***
 * calculate the wood
 * chair --> 3cft
 * table ---> 10cft
 * bed --> 50 cft
 */

function calculateWoods(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const allChair = chair * perChair;
    const allTable = table * perTable;
    const allBed = bed * perBed;

    const totalWood = allChair + allTable + allBed;

    return totalWood;
}

const result = calculateWoods(1,1,2);
console.log("Woods calculated:", result);