// Q-52 Smartphone Object

let smartphone = {
    Brand:"Tecno",
    Model:"Spark 20",
    features:{
        Storage:"250 Gb",
        screen:"720 X 1612",
        battery:"5000 Mah"
    }
}
console.log(smartphone)

// Q-53 Pulling Apart a Nested Object

let programmerSkills = {
language:["Typescript","Java Script","Java"],
tools:["Git","VS Code"],
frameWorks:["React","Spring Boot"]
}
let {language,tools,frameWorks} = programmerSkills
console.log(`Language : ${language[0]} , Tools : ${tools[2]} , Frame Works : ${0}`)

// Q-54 Making Flexible Object Key

