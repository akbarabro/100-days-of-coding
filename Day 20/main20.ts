// Q-58 Finding Average
let score_function = (...score:number[])=>{
    let score_average = score.reduce((value1,value2)=>value1+value2,0)/score.length
    console.log(score_average)
}
score_function(12,8,15,21,5)

// Q-59 Add a Special Number
function add_number(num:number): (number)=>number {
    return function(number:number): number {
        return number + num
    }
}
let result = add_number(10)
console.log(result(10))

// Q-60 Self-Running User Profile
let user = (
    function(){
        let name:string = "Akbar"
        let age:number = 20
    return {
        display_name:function(){
            console.log(`Name : ${name} Age : ${age}`)
        }
    }
    }
)()
user.display_name()