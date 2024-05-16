// Q-61 enum
enum VehicleType {
    car,
    Truck,
    Motorcycle
}
console.log(VehicleType.Truck)

// Q-62 Student Template
interface detail {
    name:string,
    age:number,
    course:string[]
}
let student:detail = {
    name:"Akbar",
    age:20,
    course:["Graphic Designing","Typescript"]
}
console.log(student)

// Q-63 Shape Shifter
type shape = {
    kind: "circle" | "rectangle",
    radius?: number,
    width?: number,
    height?:number
}

let circle : shape = {
    kind:"circle",
    radius:5
}

let rectangle : shape = {
    kind:"rectangle",
    width:10,
    height:20
}
console.log(circle)
console.log(rectangle)