// Q-94 Use the .map() method

let words= ["One","two","Three"]
let result = words.map(words=>words.length)
console.log(result)


// Q-95  Use the .filter() method

let filter_function = (num:number[])=>{
    return num.filter(num=>num>9)
}
let num = [2,3,5,8,10,15,19,21,25,28,34,37,36]
console.log(filter_function(num))

// Q-96 use the .reduce() method

let num_function = (numbers:number[])=>{
    return numbers.reduce((accumulator,current)=>accumulator + current,0)
}
let numbers = [5,4,6,8,9,7,2]
console.log(num_function(numbers))