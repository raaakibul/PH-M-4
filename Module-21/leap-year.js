/**
 * Leap year 
 */
function isLeapYear(year) {
    if(year%4 === 0) {
        return true;
    }
    else{
        return false;
    }
}

const year = isLeapYear(2014);
console.log(year);