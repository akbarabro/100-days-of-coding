// Q-73 Updating Variables

let updating_vaiables = ():void=>{
    let user:string = "Akbar"
    console.log("Initial Value : " + user)
    user = "Abro"
    console.log("Updated Value : " +user)
}
updating_vaiables()

// Q-74 Swapping Variables

let swap_value = ():void=>{
    let a:number = 5
    let b:number = 10
    console.log(`Before Swap : a =`,a,` Before Swap : b =`,b, )
    let c:number = a
    a=b
    b=c
    console.log(`After Swap : a =`,a,` After Swap : b =`,b, )
}
swap_value()

// Q-75 Compound Assignment Operators

let compound_operators = ():void=>{
    let x:number = 4
    console.log(`Initial x = `,x)
    x += 10
    console.log(`After Addition x = `,x)
    x -= 2
    console.log(`After Subtraction x = `,x)
    x *= 2
    console.log(`After multiplication x = `,x)
    x /= 4
    console.log(`After divition x = `,x)
}
compound_operators()