let price = 500;
if(isLeader===true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);

price = isLeader === true ? 0 : price+ 100;
console.log(price);