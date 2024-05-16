// Q-67 Arithmetic with Mixed Types

let addition_of_string = (num1:number,num_string:string):number=>{
    return num1 + Number(num_string)
}
console.log(addition_of_string(5,"50"))

// Q-68 Multiplying Decimals

let decimal = (num1:number,num2:number):number=>{
    return Math.round((num1*num2)*100)/100
}
console.log(decimal(2,2))

// Q-69 Dividing and Finding the Remainder

function devide (num1:number,num2:number):{result1:number;result2:number}{
    let result1 = Math.floor(num1/num2)
    let result2 = num1 % num2
    return { result1 , result2}
}
console.log(devide(50,6))