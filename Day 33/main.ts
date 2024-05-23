// Q-97  format "DD-MM-YYYY"
let date = new Date
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()
console.log(day , month , year)

// Q-98 days are left until New Year

let untilYear = ():number=>{
    let day = new Date()
    let year = new Date(day.getFullYear()+1,0,1)
    let diff = year.getTime() - day.getTime()
    let days = Math.ceil(diff/(1000*60*60*24))
    return days
}
console.log(untilYear())

// Q-99 Generate date next your BirthDay
let getBrithday = (Month:number,Day:number):Date=>{
    let day = new Date()
    let year = day.getFullYear()
    let birthday = new Date(year,Month-1,Day)
    if (birthday<day){
        birthday.setFullYear(year+1)
    }
    return birthday
}
const nextBirthday = getBrithday(1, 1)
console.log("Next birthday on:", nextBirthday.toLocaleDateString());