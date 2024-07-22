function number_loop(num){
    for (i=1; i<=num; i++){
        console.log(`Number: ${i}`);
    } 
}

function number_table(num){
    for (i=1;i<=10; i++){
        console.log(`${num} * ${i} = ${i*num}`);
    }
}

function sum_of_number(){
    let i= 1
    let sum = 0
    while (i<=10){
        console.log(`Number is: ${i}`);
        sum +=i 
        i++
        console.log(`Sum is: ${sum}`);
    }
}

function reverse_number(){
    let i = 10
    while (i>0){
        console.log(`Number is: ${i}`);
        i--
    }
}

function do_while_num(){
    let i = 1
    do{
        console.log(`Number is: ${i}`);
        i++
    }while(i<=5)
}

function factorial(num){
    let i = 1,sum=1
    if (num === 0)
        return 1
    do{
        sum *= i
        i++
    }while(i <= num)
    console.log(`factorial of ${num} is: ${sum}`);
}

function pattern(){
    let pattern = ""
    for (let i=0;i<5;i++){
        for (let j=1;j<=i;j++)
            pattern +="*"
    }
    pattern +="\n"
    return pattern
}

function skip_number(num,skip){
    for (let i=1;i<=num;i++){
        if (i==skip)
            continue
           console.log(`Number is: ${i}`);
    }
}

function stop_number(num, stop){
    for (let i=1;i<=num;i++){
        if (i==stop)
            break
           console.log(`Number is: ${i}`);
    }
}