// Q-94 Use the .map() method
var words = ["One", "two", "Three"];
var result = words.map(function (words) { return words.length; });
console.log(result);
// Q-95  Use the .filter() method
var filter_function = function (num) {
    return num.filter(function (num) { return num > 9; });
};
var num = [2, 3, 5, 8, 10, 15, 19, 21, 25, 28, 34, 37, 36];
console.log(filter_function(num));
// Q-96 use the .reduce() method
var num_function = function (numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
};
var numbers = [5, 4, 6, 8, 9, 7, 2];
console.log(num_function(numbers));
