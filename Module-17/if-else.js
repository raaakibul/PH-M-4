const salary = 2100;
if(salary>2000){
    console.log(salary);
}
else{
    console.log("no");
}

const price = 4000;
if(price >=5000){
    // 10% discount
    const discount = price *10/100;
    const payAmount = price -discount;
    console.log(payAmount);
}
else if(price> 2500){
    // 5% discount
    const discount = price *5 /100;
    const payAmount = price - discount
    console.log(payAmount);

}
else{
    console.log(price);
}