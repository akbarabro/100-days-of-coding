var fun = function (val) {
    var result = val.indexOf("Hi");
    if (result !== -1)
        val[result] = ("Salam");
};
var greeting = ["Hi", "Good"];
fun(greeting);
console.log(greeting);
