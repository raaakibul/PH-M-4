const country = "Bangladesh"
console.log(country);
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.toLowerCase());

const address = "Dhaka";
const part = address.slice(2,4)
console.log(part);

const sentence = "He lives in a country name Bangladesh";
console.log(sentence.split(" "));

const first = "Rakibul"
const last = "Islam"
const fullname = firs + ' ' + last
console.log(fullname);
console.log(first.concat);

let sen = "I am learning new lessons"
for(const letter of sen) {
    console.log(letter);
}

let reverse = ''
for(const letter of sen) {
    console.log(letter);
    reverse = letter + reverse
}
console.log(reverse);

for(let i =0;i<sen.length;i++) {
    console.log(i);
    console.log(sen[i]);
}