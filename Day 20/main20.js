// Q-58 
var score_function = function () {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var score_average = score.reduce(function (value1, value2) { return value1 + value2; }, 0) / score.length;
    console.log(score_average);
};
score_function(12, 8, 15, 21, 5);
// Q-59
function add_number(num) {
    return function (number) {
        return number + num;
    };
}
var result = add_number(10);
console.log(result(10));
// Q-60
var user = (function () {
    var name = "Akbar";
    var age = 20;
    return {
        display_name: function () {
            console.log("Name : ".concat(name, " Age : ").concat(age));
        }
    };
})();
user.display_name();
