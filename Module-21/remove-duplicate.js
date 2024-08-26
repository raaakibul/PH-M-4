const letter = ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'b', 'c', 'd']

const numbers = [21,25,25,45,45,78,78,98,98]

function noDuplicates(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }       
    }
    return unique;
}

const result = noDuplicates(numbers)
console.log(result);