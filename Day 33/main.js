// Q-97  format "DD-MM-YYYY"
var date = new Date;
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log(day, month, year);
// Q-98 days are left until New Year
var untilYear = function () {
    var day = new Date();
    var year = new Date(day.getFullYear() + 1, 0, 1);
    var diff = year.getTime() - day.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
};
console.log(untilYear());
// Q-99 
var getBrithday = function (Month, Day) {
    var day = new Date();
    var year = day.getFullYear();
    var birthday = new Date(year, Month - 1, Day);
    if (birthday < day) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
};
var nextBirthday = getBrithday(1, 1);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
