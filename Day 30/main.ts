// Q-88 Rounding to the Nearest Integer
let rounding_nearest = (val1:number):number=>{
    return Math.round(val1)
}
console.log(rounding_nearest(2.7))

// Q-89 Converting Strings to Numbers
let converting_to_number = (val1:string):number=>{
    return parseFloat(val1)
}
console.log(converting_to_number("555"))

// Q-90 Checking if a Value is NaN
let checking_nan = (val1:any):boolean=>{
    return isNaN(val1)
}
console.log(checking_nan("Hello"))
console.log(checking_nan(123))