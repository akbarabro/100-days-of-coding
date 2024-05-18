// Q-88 Rounding to the Nearest Integer
var rounding_nearest = function (val1) {
    return Math.round(val1);
};
console.log(rounding_nearest(2.7));
// Q-89 Converting Strings to Numbers
var converting_to_number = function (val1) {
    return parseFloat(val1);
};
console.log(converting_to_number("555"));
// Q-90 Checking if a Value is NaN
var checking_nan = function (val1) {
    return isNaN(val1);
};
console.log(checking_nan("Hello"));
console.log(checking_nan(123));
