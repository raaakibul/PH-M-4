function square(x){
    return x*x;
}

const result = square(3)
console.log("Square: ",result);

function add(x, y){
    addition = x + y;
    console.log("Addition: ", addition);
}

add(123, 2542)


function evenSize(str){
    const size = str.length;
    console.log(str, size);
    if(size%2 == 0){
        console.log('Even size: ', size);
        return true;
    }
    else{
        console.log("odd size: ", size);
        return false;
    }
}
evenSize('Dhaka')
evenSize('Ctg')

function doubleSize(number, dodouble){
    if(dodouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 2 + 1;
        return result;
    }
}

console.log(doubleSize(5,true));
console.log(dodouble(5, true));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([12,45,78,4545,233])
