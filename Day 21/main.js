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
