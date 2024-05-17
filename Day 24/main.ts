// Q-70 Understanding let in Loops
let loop_function = (val1:number):void=>{
    for (let i = val1;i<=100;i++){
        console.log(`${i} x 2 = ${i*2}`)
    }
}
loop_function(20)

// Q-71 Compare let and const
let age:number = 20;
age = 21
const name1 :string = "Akbar"
// try {
//     name1 = "akbar"
// }catch(error){
//     console.log(`Hi`)
// }

// Q-72 Block Scope with let and const
{
    let test1 = "visiable inside block"
    const test2 = "also visiable inside block"
    console.log(test1)
    console.log(test2)
}

// try {
//     console.log(test1)
// }catch (error) {
//     console.log("`blockLet` is not accessible outside the block.")
// }
// try {
//     console.log(test2)
// }catch (error) {
//     console.log("`blockLet` is not accessible outside the block.")
// }