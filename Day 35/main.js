// Q-103 Random Boolean
var random_boolean = function () {
    var randomBoolean = Math.random() > .5;
    return randomBoolean;
};
console.log(random_boolean());
// Q-104 Random Color Code
var random_color_code = function () {
    var color_code = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return color_code;
};
console.log(random_color_code());
// Q-105 Random Dice Roll
var diceRoll = function () {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(diceRoll());
