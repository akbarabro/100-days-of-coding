// Q-82 Length of a String

let string_length = (val:string)=>{
    return val.length
}
console.log(string_length("Akbar"))

// Q-83 Converting to Upper and Lower Case

let upperAndLowerCasr = (val1:string)=>{
    let upper_case = val1.toUpperCase()
    let lower_case = val1.toLowerCase()
    console.log(`Upper Case : ${upper_case}\nLower Case : ${lower_case}`)
}
upperAndLowerCasr("Akbar")

// Q-84 Replacing Text in a String

let replace_string = (val1):string=>{
    return val1.replace(/Typescript/g,"Javascript")
}
console.log(replace_string("I'm learning Typescript"))