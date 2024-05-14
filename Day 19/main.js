// Q-55 Double Numbers In Array
// forEach method
var numberObj = [10, 20, 30, 40, 50];
numberObj.forEach(function (value) { console.log(value * 2); });
// forEach method effect on orignal array
// map method
var DoubleNumbers = numberObj.map(function (num) { return num * 2; });
console.log(DoubleNumbers);
// map method will work on copy array
// Q-56 Mixed Value Array
var mix_Object = ["Akbar", "Ahmed", "Raza", "Bakir", 123, 456, 789];
var name_object = mix_Object.filter(function (value) { return typeof value === "string"; });
console.log(name_object);
var number_object = mix_Object.filter(function (value) { return typeof value === "number"; });
console.log(number_object);
var grades = [450, 500, 380, 570];
var average = grades.reduce(function (num1, num2) { return num1 + num2; }, 0) / grades.length;
console.log(average);
// let total_marks:number =  850
// let one_percent_total_marks:number =  850/100
// let grade = (num:number):void=>{
//     let percetage:number = num/one_percent_total_marks
//     console.log(percetage)
//     if (percetage >= 90 ){
//         console.log("Grade : A+ \nCongratulations on your fantastic grades!")}
//     else if (percetage >= 80){
//         console.log("Grade : A \nWell done! Your hard work paid off!")}
//     else if (percetage >= 70){
//         console.log("Grade : B \nGreat job on your outstanding grades!")}
//     else if (percetage >= 60){
//         console.log("Grade : C \nImpressive work! Keep it up!")}
//     else if (percetage >= 40){
//         console.log("Pass \nKeep focusing")}
//     else if (percetage >= 0){
//         console.log("Fail \nTyr agian")}
// }
// grade(500)
