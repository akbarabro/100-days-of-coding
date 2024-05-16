// Q-67 Arithmetic with Mixed Types
var addition_of_string = function (num1, num_string) {
    return num1 + Number(num_string);
};
console.log(addition_of_string(5, "50"));
// Q-68
var decimal = function (num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
};
console.log(decimal(2, 2));
// Q-69
function devide(num1, num2) {
    var result1 = Math.floor(num1 / num2);
    var result2 = num1 % num2;
    return { result1: result1, result2: result2 };
}
console.log(devide(50, 6));
