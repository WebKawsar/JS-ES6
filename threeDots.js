const age = [10, 15, 35, 39, 99];
const ages = [27, 37, 57, 67, 87, 97];
const buraAges = [9, 19, 29, 39, 89];
const allAges = age.concat(ages).concat([100]).concat(buraAges);
// console.log(allAges);

const allAges2 = [...age, ...ages, 500, ...buraAges];
// console.log(allAges2);

const business = 680;
const minister = 750;
const sochib = 350;
const result = Math.max(business, minister, sochib);
// console.log(result);


const maximum = [680, 750, 350];
const result2 = Math.max(...maximum);
// console.log(result2);


// additional param rest in array
function spreadOperator(num1, num2, num3, ...spread){

    console.log("The number 1 is : " + num1);
    console.log("The number 2 is : " + num2);
    console.log("The number 3 is : " + num3);
    console.log(spread);
}

spreadOperator(10, 25, 35, 45, 50, 90);


