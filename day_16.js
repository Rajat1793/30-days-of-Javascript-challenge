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
    if (str.length <= 1 ) return true
    if (str.charAt(0) !== str.charAt(str.length -1))
        return palindrome(str.slice(1,-1))
}
console.log(palindrome("raar"));
console.log(palindrome('hello'));

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left=0,right=arr.length -1){
    if (left > right) return -1
    const mid = Math.floor((left +right) /2)
    if (arr[mid] === target)
        return mid
    return arr[mid] >target ? binarySearch(arr, target, left, mid -1): binarySearch(arr, target, mid +1, right)
}

console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],6));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. 
        // Log the result for a few test cases
function countOccurance(arr, target){
    if (arr.length === 0) return 0
    const count = arr[0] === target ? 1: 0
    return count + countOccurance(arr.slice(1),target)
}
console.log(countOccurance([1,1,5,5,1],1));
console.log(countOccurance([5],1));

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
//google help
class TreeNode {
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}
function inOrderTraversal (node){
    if (node){
        inOrderTraversal(node.left)
        console.log(node.value);
        inOrderTraversal(node.right)
    }
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
inOrderTraversal(root)

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
// google help
function calculateDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(calculateDepth(node.left), calculateDepth(node.right));
}

const rootDepth = new TreeNode(1);
rootDepth.left = new TreeNode(2);
rootDepth.right = new TreeNode(3);
rootDepth.left.left = new TreeNode(4);
console.log(calculateDepth(rootDepth)); 
