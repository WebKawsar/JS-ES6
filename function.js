/***************************************************************************************
 *                                      Way No : 1
 ***************************************************************************************/
// create function simply way
function myFunc(num){
    sum = num + num;
    return sum;
}

const result = myFunc(11);
// console.log(result);


/***************************************************************************************
 *                                      Way No : 2
 ***************************************************************************************/
// create callback function simply way
function callBack(name, age, skill){
    console.log("Name : " + name);
    console.log("Age : " + age);
    skill();
}

function graphicDesign(){
    console.log("Expert in Graphic Design");
}

function webDesign(){
    console.log("Expert in Web Design");
}

// callBack("Kawsar Ahmed", 24, webDesign);
// callBack("Shamim Ahmed", 23, graphicDesign);


/***************************************************************************************
 *                                      Way No : 3
 ***************************************************************************************/
//View Arguments in Function
function argumentsFunc(num1, num2){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

var resultArguments = argumentsFunc(5, 8, 6, 20);
// console.log(resultArguments);

/***************************************************************************************
 *                                      Way No : 4
 ***************************************************************************************/
//Function er default value set kore dewa
function defaultValue(num1, num2 = 0){
    sum = num1 + num2;
    return sum;
}

var defaultResult = defaultValue(5);
// console.log(defaultResult);
