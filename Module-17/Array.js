const numbers = [12,22,23,24,25,26,27,28];
console.log(numbers);

console.log(numbers[1]);
numbers.shift(12);
console.log(numbers);
numbers.push(29);
console.log(numbers);
// add numbers
numbers.push(78,23,24,25,26)
console.log(numbers);
numbers.pop();
console.log(numbers);


for (number in numbers) {
    console.log(number);
}