const mobile ={
    brand:'Samsung',
    price:25000,
    color:'black',
    camera:'12mp'
}

for(const prop in mobile){
    console.log(prop);
}

const pen = {
    brand:'Apple',
    price:10,
    color:'black'
}

const pencil = new Object()
console.log(pencil);
const rubber = Object.create({})
console.log(rubber);

const friends = ['Abed', 'Nope', 'Rafi','Refad']
for(const friend of friends){
    console.log(friend);
}

for(let i=0;i<5;i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers = ['1', '2', '3', '4', '5']
console.log(numbers);
const reversed = numbers.reverse();
console.log(reversed);

const rev_numbers =[];
for(const num of numbers){
    console.log(numbers);
}