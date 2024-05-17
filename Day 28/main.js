// Q-82 Length of a String
var string_length = function (val) {
    return val.length;
};
console.log(string_length("Akbar"));
// Q-83 Converting to Upper and Lower Case
var upperAndLowerCasr = function (val1) {
    var upper_case = val1.toUpperCase();
    var lower_case = val1.toLowerCase();
    console.log("Upper Case : ".concat(upper_case, "\nLower Case : ").concat(lower_case));
};
upperAndLowerCasr("Akbar");
// Q-84 Replacing Text in a String
var replace_string = function (val1) {
    return val1.replace(/Typescript/g, "Javascript");
};
console.log(replace_string("I'm learning Typescript"));
