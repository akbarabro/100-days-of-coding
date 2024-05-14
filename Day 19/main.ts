// Q-55 Double Numbers In Array
// forEach method
let numberObj:number[] = [10,20,30,40,50]
numberObj.forEach((value)=>{console.log(value*2)})
// forEach method effect on orignal array

// map method
let DoubleNumbers = numberObj.map(num=>num*2)
console.log(DoubleNumbers)
// map method will work on copy array

// Q-56 Mixed Value Array
let mix_Object:(string|number)[] = ["Akbar","Ahmed","Raza","Bakir",123,456,789]
let name_object = mix_Object.filter((value) => typeof value === "string")
console.log(name_object)
let number_object = mix_Object.filter((value) => typeof value === "number")
console.log(number_object)

let total_marks:number =  850
let one_percent_total_marks:number =  850/100
let grade = (num:number):void=>{
    let percetage:number = num/one_percent_total_marks
    console.log(percetage)
    if (percetage >= 90 ){
        console.log("Grade : A+ \nCongratulations on your fantastic grades!")}
    else if (percetage >= 80){
        console.log("Grade : A \nWell done! Your hard work paid off!")}
    else if (percetage >= 70){
        console.log("Grade : B \nGreat job on your outstanding grades!")}
    else if (percetage >= 60){
        console.log("Grade : C \nImpressive work! Keep it up!")}
    else if (percetage >= 40){
        console.log("Pass \nKeep focusing")}
    else if (percetage >= 0){
        console.log("Fail \nTyr agian")}
}
grade(500)


// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.