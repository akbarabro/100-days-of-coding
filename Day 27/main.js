// Q-79 Creating and Accessing Object Properties
var car = {
    make: "Honda",
    model: "CD 70",
    year: 2024
};
console.log(car.model);
// Q-80 Updating Object Properties
var car1 = {
    make: "Honda",
    model: "CD 70",
    year: 2024
};
car1.model = "CD 80";
console.log(car.model);
// Q-81  Iterating Over Object Properties
var iterating = function (obj) {
    for (var Property in obj) {
        console.log("".concat(Property, ": ").concat(obj[Property]));
    }
};
iterating({ name: "Akbar", age: 20, course: ["Typescript", "Graphic Designer"] });
