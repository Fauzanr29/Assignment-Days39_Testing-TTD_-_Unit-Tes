function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

function getCurrentDate(){
    return new Date();
}

function getCurrentYear(){
    return new Date().getFullYear();
}

function isWeekDays(){
    const dayOfWeek = getCurrentDate();
    console.log(dayOfWeek);
    return (dayOfWeek.getDay() === 6) || (dayOfWeek.getDay() === 0);
    
}

function isleapYear(){
    const year = getCurrentYear();
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function sum(a, b) {
    return a + b;
}

function getZero() {
    return 0;
}

module.exports = {
    checkOddEven,
    sum,
    getZero,
    isWeekDays,
    isleapYear,
    getCurrentDate,
    getCurrentYear
};
