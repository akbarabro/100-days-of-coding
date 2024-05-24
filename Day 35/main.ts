// Q-103 Random Boolean
let random_boolean = ():boolean=>{
    let randomBoolean = Math.random()>.5
    return randomBoolean
}
console.log(random_boolean())

// Q-104 Random Color Code
let random_color_code = ():string=>{
    let color_code = '#' + Math.floor(Math.random()*0xFFFFFF).toString(16)
    return color_code
}
console.log(random_color_code())

// Q-105 Random Dice Roll
let diceRoll = ():number=>{
    return Math.floor(Math.random()*6)+1
}
console.log(diceRoll())