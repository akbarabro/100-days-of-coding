// Q-85 Finding the position of substring
var substring_position = function (val1) {
    var result = val1.indexOf("code");
    console.log(result);
};
substring_position("Learn to code with JavaScript");
// Q-86 Checking for Text Presence
var checking_text = function (val1) {
    return val1.includes("JavaScript");
};
console.log(checking_text("Learn to code with JavaScript"));
// Q-87 Extracting a Substring
var extracting_substring = function (val1) {
    return val1.substring(9, 28);
};
console.log(extracting_substring("Learn to code with JavaScript"));
