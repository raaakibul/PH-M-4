// create a object
var person ={
    firstName: "Md. Tazri",
    lastName: "Milon",
    age: 22,
    job: "Student",
    address: "Dhaka, Bangladesh",
    getName:()=>{
        console.log(`${person.firstName} ${person.lastName}`);
        console.log(`age : ${person.age}, job : ${person.job}`);
    }
}

// Accessing object properties
console.log(person);
console.log(person.firstName);
console.log(person.lastName);


let computer = {
    brand: "Asus",
    model: "ROG",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    price: "1200 usd $",
    getDetails:()=>{
        console.log(`Brand : ${computer.brand}, Model : ${computer.model}`);
    }
}
console.log(computer);
console.log(computer.brand);
console.log(computer.model);
