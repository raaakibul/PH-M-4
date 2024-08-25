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

const year = isLeapYear(2000);
console.log(year);

function isLeapYear2(year){
    if(year%100 != 0 && year%4===0){
        return true;
    }
    else if(year % 100 ===0 && year %400 ===0){
        return true;
    }
    else{
        return false;
    }
}

const year2 = isLeapYear2(2100);
console.log(year2);