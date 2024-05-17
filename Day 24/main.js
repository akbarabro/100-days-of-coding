// Q-70 Understanding let in Loops
var loop_function = function (val1) {
    for (var i = val1; i <= 100; i++) {
        console.log("".concat(i, " x 2 = ").concat(i * 2));
    }
};
loop_function(20);
// Q-71 Compare let and const
// let age:number = 20;
// age = 21
// const name1 :string = "Akbar"
// try {
//     name1 = "akbar"
// }catch(error){
//     console.log(`Hi`)
// }
// Q-72 Block Scope with let and const
{
    var test1 = "visiable inside block";
    var test2 = "also visiable inside block";
    console.log(test1);
    console.log(test2);
}
