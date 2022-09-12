// function isLeapyear(year) {
//     const reminder = year % 4;
//     if (reminder === 0){
//         // console.log("year is leap year", year);
//         return true;
//     }
//     else {
//         // console.log("year is not a leap year", year);
//         return false;
//     }
// }

function isLeapyear(year) {
    const reminder = year % 4;
    if (reminder === 0){
        // console.log("year is leap year", year);
        return true;
    }
    else {
        // console.log("year is not a leap year", year);
        return false;
    }
}
const isMyYearLeapYear = isLeapyear(1933);
console.log("my year", isMyYearLeapYear)

const isHeraYearLeapYear = isLeapyear(1960);
console.log("my year",isHeraYearLeapYear)