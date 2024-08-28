const heights = [65,66,78,25,56,50,45]
// console.log(heights);

function getMaxHeight(numbers){
    let max = heights[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

const result = getMaxHeight(heights);
console.log("Max Height: " + result);