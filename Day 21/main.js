// Q-61 enum
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["car"] = 0] = "car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Truck);
var student = {
    name: "Akbar",
    age: 20,
    course: ["Graphic Designing", "Typescript"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
