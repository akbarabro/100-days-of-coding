// Q-73 Updating Variables
var updating_vaiables = function () {
    var user = "Akbar";
    console.log("Initial Value : " + user);
    user = "Abro";
    console.log("Updated Value : " + user);
};
updating_vaiables();
// Q-74 Swapping Variables
var swap_value = function () {
    var a = 5;
    var b = 10;
    console.log("Before Swap : a =", a, " Before Swap : b =", b);
    var c = a;
    a = b;
    b = c;
    console.log("After Swap : a =", a, " After Swap : b =", b);
};
swap_value();
// Q-75 Compound Assignment Operators
var compound_operators = function () {
    var x = 4;
    console.log("Initial x = ", x);
    x += 10;
    console.log("After Addition x = ", x);
    x -= 2;
    console.log("After Subtraction x = ", x);
    x *= 2;
    console.log("After multiplication x = ", x);
    x /= 4;
    console.log("After divition x = ", x);
};
compound_operators();
