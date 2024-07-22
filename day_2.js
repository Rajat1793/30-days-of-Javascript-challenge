a = 10;
b = 20;
console.log("two numbers a & b: ", a, b);
console.log("Add two numbers: ", a + b);
console.log("Substract two numbers: ", b - a);
console.log("Multiply two numbers: ", a * b);
console.log("Divide two numbers: ", b / a);
console.log("Reminder of two numers: ", b % a);

a += 10;
b -= 10;
console.log("Added new value using a+= : ", a);
console.log("Substracted new value using b-= : ", b);

c = 9;
d = 20;
console.log("Compare number using > : ", a > c);
console.log("Compare number using < : ", c < a);

console.log("Compare number using >= :", a >= d);
console.log("Compare number using <= :", b <= c);

console.log(" comparison using == : ", 1 === 1);
console.log(" comparison using === : ", 1 === "1");
console.log(" comparison using === : ", "hello" === "hello");
console.log(" comparison using === : ", 0 === false);

console.log("&& operrator: ", b && d);
console.log("! operrator: ", b !== d);
console.log("|| operrator: ", b || d);

e = -1;
console.log("Tennary operator: ", a >= 0 ? "positive" : "negative");
console.log("Tennary operator: ", e >= 0 ? "positive" : "negative");

function operation() {
  console.log("two numbers a & b: ", a, b);
  console.log("Add two numbers: ", a + b);
  console.log("Substract two numbers: ", b - a);
  console.log("Multiply two numbers: ", a * b);
  console.log("Divide two numbers: ", b / a);
  console.log("Reminder of two numers: ", b % a);
}

console.log(operation());

