function even_odd(num){  //function decleration
    if (num % 2 == 0 )
        console.log(`Number ${num} is even`);
    else
        console.log(`Number ${num} is odd`);
}

function square (num){  //function decleration
    let sum = num*num
    console.log(`Square of Number is: ${sum}`);
}

const max_num = function (num1, num2){  //function expression
    if (num1 > num2)
       return(`${num1} is greater than ${num2}`);
    else
        return(`${num2} is greater than ${num1}`);
}
console.log(max_num(2,4));

const concat = function (str1, str2) {   //function expression
    return(str1 + str2);
}
const raj = concat("rajat", "jaiswal")
console.log(raj);

const sum_number = (num1, num2) =>{
    return (num1 + num2)
}
const sum = sum_number(10, 20)
console.log(sum);
console.log(sum_number(120, 20));

const check_string = (str, check) =>{
    return (str.toLowerCase().includes(check))
} 
console.log(check_string("My name is rajat","my"));

const product = (num1, num2=5) =>{
    return (num1*num2)
}
console.log(product(2));
console.log(product(2,6));

const myname = (name, age=10) =>{
    return (`hi im ${name}, age: ${age}`)
}

console.log(myname('rajat',12));


// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}
// higher order function
function higherOrderFunction(func, num){
    let i =1
    while (i <= num ){
        console.log(`I am higher order function ${i}`)
        func()
        i++
    }
}
higherOrderFunction(callbackFunction, 5);

const diameter = function(radius){
    return 2 * radius;
}
const area = function(radius){
    return Math.PI * radius * radius;
}

const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log((calculate(5, diameter, area)));