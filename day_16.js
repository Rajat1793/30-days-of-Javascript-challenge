// DAY 16: RECURSION

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases
function factorial(n){
    if (n<= 1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(6));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases
function fibo(n){
    if (n <= 1) return n
    return fibo(n-1) +fibo(n-2)
}
console.log(fibo(5));
console.log(fibo(7));

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases
function arraySum (arr){
    if (arr.length === 0) return 0
    return arr[0] +arraySum(arr.slice(1))
}
console.log(arraySum([1,2,3,4]));
console.log(arraySum([]));
console.log(arraySum([2]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function max (arr){
    if (arr.length === 1) return arr[0]
    return Math.max(arr[0],max(arr.slice(1)))
}
console.log(max([1,2,3,5]));
console.log(max([-1,-1,-2,-3]));

//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str){
    if (str === '')return ''
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('hello'));
console.log(reverseString(''));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test case
// google help
function palindrome(str){
    if (str.length <=1 ) return true
    if (str.charAt[0] !== str.charAt(str.length -1))
        return palindrome(str.slice(1,-1))
}
console.log(palindrome("hello"));
console.log(palindrome('hello'));

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
