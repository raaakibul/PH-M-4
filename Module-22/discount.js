/***
 * upto 100: --->100
 * more than 101 -200: 90
 * more than 200: -->70
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return  total;
    }
}

const total = discountPrice(5)
console.log(total);

// layered discount price
/***
 * first 100 --> 100
 * 101 - 200 --> 90
 * above 200 --> 70
 */

function layeredDiscountPrice(quantity) {
    const first100 = 100;
    const second100 = 90;
    const above200 = 70;

    if(quantity <= 100){
        const total = quantity * first100;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100;
        const remainingQuantity = quantity -100;
        const remainingTotal = remainingQuantity * second100;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100;
        const second100Total = 100 * second100;
        const remainingQuantity = quantity - 200;

        const remainingTotal = remainingQuantity * above200;
        const total = first100Total + remainingTotal + second100Total;
        return total; 
    }
}

const result = layeredDiscountPrice(201);
console.log(result);