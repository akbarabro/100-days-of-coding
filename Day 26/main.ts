// Q-76 Function Parameters

let parameters_use = (user_id:string,pw:number):void=>{
    console.log(`Dear user your ID name is ${user_id} and Password is ${pw}`) 
}
parameters_use("Akbar",1234)

// Q-77 Default Parameters

let user_function = (user:string="anonymous"):void=>{
    console.log("Hello ",user)
}
user_function()

// Q-78 Function Expressions vs. Function Declarations

function Declarations (num1:number,num2:number):number{
    return num1*num2
}
console.log(Declarations(5,6))

const Expressions = function(num1:number,num2:number){
    return num1*num2
}
console.log(Expressions(5,9))