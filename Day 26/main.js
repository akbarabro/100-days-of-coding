// Q-76 Function Parameters
var parameters_use = function (user_id, pw) {
    console.log("Dear user your ID name is ".concat(user_id, " and Password is ").concat(pw));
};
parameters_use("Akbar", 1234);
// Q-77 Default Parameters
var user_function = function (user) {
    if (user === void 0) { user = "anonymous"; }
    console.log("Hello ", user);
};
user_function();
// Q-78 Function Expressions vs. Function Declarations
function Declarations(num1, num2) {
    return num1 * num2;
}
console.log(Declarations(5, 6));
var Expressions = function (num1, num2) {
    return num1 * num2;
};
console.log(Expressions(5, 9));
