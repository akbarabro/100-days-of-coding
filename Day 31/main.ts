// Q-91 .push() method
let favorite_fruit:string[] = ["Apple","Mango","Water Melon"]
favorite_fruit.push("Grapes")
console.log(favorite_fruit)

// Q-92 .pop() method
function remove_last_element <T>(arr:T[]):T|undefined{
    return arr.pop()
}
let array:string[] = ["Apple","Mango","Water Melon"]
console.log(remove_last_element(array))
console.log(array)

// Q-93 Find & Replace value
let find_replace = (val1:string[])=>{
    let index = val1.indexOf("Apple")
    if(index !== -1)val1[index] = "Banana"
}
let array_fruit:string[] = ["Apple","Mango","Water Melon"]
find_replace(array_fruit)
console.log(array_fruit)