// Q-91 .push() method
var favorite_fruit = ["Apple", "Mango", "Water Melon"];
favorite_fruit.push("Grapes");
console.log(favorite_fruit);
// Q-92 .pop() method
function remove_last_element(arr) {
    return arr.pop();
}
var array = ["Apple", "Mango", "Water Melon"];
console.log(remove_last_element(array));
console.log(array);
// Q-93 Find & Replace value
var find_replace = function (val1) {
    var index = val1.indexOf("Apple");
    if (index !== -1)
        val1[index] = "Banana";
};
var array_fruit = ["Apple", "Mango", "Water Melon"];
find_replace(array_fruit);
console.log(array_fruit);
