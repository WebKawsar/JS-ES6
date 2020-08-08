// way no -1
function doubleIt(num){
    sum = num * 2;
    return sum;
}

// Way no - 2 
const doubleIt = function(num){
    sum = num * 2;
    return sum;
}

// Way No - 3
const doubleIt = () => num * 2;
const doubleIt = num => num * 2;
const doubleIt = (num1, num2) => num1 * num2;
const doubleIt = (num1, num2, num3) => {
    add = num1 + num2;
    sub = add - num3;
    return sub;
}
const result = doubleIt(50, 10, 25);
console.log(result);

