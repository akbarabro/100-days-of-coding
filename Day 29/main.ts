// Q-85 Finding the position of substring
let substring_position = (val1:string)=>{
    let result = val1.indexOf("code")
    console.log(result)
}
substring_position("Learn to code with JavaScript")

// Q-86 Checking for Text Presence
let checking_text = (val1:string):boolean=>{
    return val1.includes("JavaScript")
}
console.log(checking_text("Learn to code with JavaScript"))

// Q-87 Extracting a Substring
let extracting_substring = (val1:string)=>{
    return val1.substring(9,28)
}
console.log(extracting_substring("Learn to code with JavaScript"))