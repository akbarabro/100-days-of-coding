// Q-52 Smartphone Object
var smartphone = {
    Brand: "Tecno",
    Model: "Spark 20",
    features: {
        Storage: "250 Gb",
        screen: "720 X 1612",
        battery: "5000 Mah"
    }
};
console.log(smartphone);
// Q-53 Pulling Apart a Nested Object
var programmerSkills = {
    language: ["Typescript", "Java Script", "Java"],
    tools: ["Git", "VS Code"],
    frameWorks: ["React", "Spring Boot"]
};
var language = programmerSkills.language, tools = programmerSkills.tools, frameWorks = programmerSkills.frameWorks;
console.log("Language : ".concat(language[0], " , Tools : ").concat(tools[2], " , Frame Works : ").concat(0));
// Q-54 Making Flexible Object Key
var function1 = function (key, value) {
    var Object1 = {};
    Object1[key] = value;
    return Object1;
};
var result = function1("Akbar", "Abro");
console.log(result);
