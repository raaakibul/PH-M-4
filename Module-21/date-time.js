/**
 * Date and time 
 */
console.log("Ddate and time");
const today = new Date();
const date = new Date('2062-10-09');
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091,1,26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-GB'));