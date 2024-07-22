const array = [1,2,4,5]
console.log(`Array: ${array}`);
console.log(`first element of array: ${array[0]}`);
console.log(`last element of array: ${array[array.length -1]}`);

array.push(6)
console.log(`Array: ${array}`);

array.pop()
console.log(`Array: ${array}`);

array.shift(0)
console.log(`Array: ${array}`);

array.unshift(7)
console.log(`Array: ${array}`);

map_array = array.map (double)
function double(num){
    return num * 2
}
console.log(`Array: ${map_array}`);

filter_array = array.filter(filter_num)
function filter_num(num){
    return num <10
}
console.log(`Array: ${filter_array}`);

reduce_array = array.reduce(substract)
function substract(total,num){
    console.log(total);
    return total-num
}
console.log(`Array: ${reduce_array}`);

for (let i=0;i < array.length;i++)
    console.log(`${array[i]}`);
array.forEach(element => {
    return array+1
});

var array2d = [[1,2,3,4],[5,6,7,8]]
console.log(`Array: ${array2d}`);

for (let i=0;i<array2d.length;i++){
    for (let j=0;j<=i;j++){
        console.log(`Array: ${i}${j}`);
    }
    console.log(`\t`);
}
        
console.log(array2d[0][1]);
console.log(array2d[1][2]);