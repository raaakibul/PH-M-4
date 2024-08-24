function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}

function inchToFeet2(inch){
    const feetfraction = inch /12;
    const feetNumber = parseInt(feetfraction);
    const inchremaining = inch%12;
    const result = feetNumber + 'ft' + inchremaining + 'inch'
    return result;
}
const feet2 = inchToFeet2(75);
console.log(feet2);
const height = inchToFeet(68);
console.log(height);

function mileTokilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const kiloresult = mileTokilometer(36);
console.log("Mile to Kilo:",kiloresult);

function kiloMetersToMiles(kilo){
    const mile = kilo * 1.60934;
    return mile;
}

const mileResult = kiloMetersToMiles(56);
console.log("Kilo to mile:", mileResult);