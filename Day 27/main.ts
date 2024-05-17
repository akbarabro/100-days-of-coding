// Q-79 Creating and Accessing Object Properties

let car = {
    make:"Honda",
    model:"CD 70",
    year:2024
}
console.log(car.model)

// Q-80 Updating Object Properties

let car1 = {
    make:"Honda",
    model:"CD 70",
    year:2024
}
car1.model = "CD 80"
console.log(car.model)

// Q-81  Iterating Over Object Properties

let iterating = (obj:object)=>{
    for (let Property in obj){
        console.log(`${Property}: ${obj[Property]}`)
    }
}
iterating({name:"Akbar",age:20,course:["Typescript","Graphic Designer"]})