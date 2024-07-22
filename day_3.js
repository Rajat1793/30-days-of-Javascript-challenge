function checkNumber (num){
    if (num > 0){
        console.log(`number ${num} is positive`);
    } 
    else if (num < 0){
        console.log(`number ${num}  is negative`);
    }
    else if (num == 0){
        console.log(`number ${num} is zero`);
    }
    console.log(num % 2 == 0?'number is even':'number is odd')
}

function ageCheck (age){
    if (age >= 18){
        console.log(`Person age is ${age} he is eligible to vote`);
    }
    else {
        console.log(`Person age is ${age} he is not eligible to vote`);
    }
}

function largestNumber(num1, num2, num3){
    if (num1 > num2){
        if (num1 > num3){
            console.log(`Number 1: ${num1} is greatest`);
        }
    }
    else if (num2 >num3){
        console.log(`Number 2: ${num2} is greater than number 3: ${num3}`);
    }
    else {
        console.log(`Number 3: ${num3} is greatest`);
    }
}
function week(num){
    switch (num){
        case 1:
            console.log(`Today is Monday, day ${num} of week`);
            break
        case 2:
            console.log(`Today is Tuesday, day ${num} of week`);
            break
        case 3:
            console.log(`Today is Wednesday, day ${num} of week`);
            break
        case 4:
            console.log(`Today is Thrusday, day ${num} of week`);
            break
        case 5:
            console.log(`Today is Friday, day ${num} of week`);
            break
        case 6:
            console.log(`Today is Saturday, day ${num} of week`);
            break
        case 7:
            console.log(`Today is Sunday 🥳, day ${num} of week`);
            break
    }
}
function checkGrade (score) {
    switch (true) {
      case score >= 90:
        grade = "A";
        break;
      case score >= 80:
        grade = "B";
        break;
      case score >= 70:
        grade = "C";
        break;
      case score >= 60:
        grade = "D";
        break;
      default:
        grade = "F";
    }
    console.log("Your grade is " + grade);
}

function checkLeapYear(year){
    if (year % 100 === 0 ? year % 400 === 0 : year % 4=== 0)
        console.log(`Year ${year} is leap year`);
    else
        console.log(`Year ${year} is not leap year`);
}

console.log("Functions available are: week,largestNumber, ageCheck, checkNumber, checkGrade, checkLeapYear");