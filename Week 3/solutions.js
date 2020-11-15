/* Print all elements of the arrray. */
function printAll() {
    var A = [10, 5, 13, 18, 51];
    for (var i = 0; i < A.length; i++) {
        console.log(A[i]);
    }
}

/* Create a new array, containg the elements of A multiplied by 2 */
function multiplyArrayElements() {
    var A = [10, 5, 13, 18, 51];
    var B = Array(A.length);
    for (var i = 0; i < A.length; i++) {
        B[i] = A[i] * 2;
    }
}

/* Return the even numbers of the array. */
function getEvenNumbers() {
    var A = [10, 5, 13, 18, 51];
    return A.filter(el => el % 2 == 0);
}

/* Check if there are elements smaller than 10 */
function hasElementsSmallerThanTen() {
    var A = [10, 5, 13, 18, 51];
    return A.filter(el => el < 10).length > 0;
}

/* Return all elements that are multiple of 3 */
function getMultiplesOfThree() {
    var A = [10, 5, 13, 18, 51];
    return A.filter(el => el % 3 == 0);
}

/* Calculate the sum of all elements in the array */
function calculateSum() {
    var A = [10, 5, 13, 18, 51];
    return A.reduce((accumulator, currentElement) => accumulator + currentElement);
}

/* Create array containing the last two elements of A */
function calculateSum() {
    var A = [10, 5, 13, 18, 51];
    return A.slice(A.length - 2, A.length);
}


/* Create array that contains the current date and the date 08.12.2018 21:00:00 */
function getArrayWithDate() {
    var dates = Array(2);
    dates[0] = new Date();
    dates[1] = new Date('12.08.2018');
    dates[1].setHours(21, 0, 0);
    return dates;
}

/* Calculate the number of days in month in a specific year */
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/* Calculate number of days in month and day of week */
function calculateDaysOfMonthAndWeekDay() {
    var dates = getArrayWithDate();
    var reducedDatesCurrentDate = Array.of(getDaysInMonth(dates[0].getMonth(), dates[0].getFullYear()), dates[0].getDay());
    var reducedDatesDecember = Array.of(getDaysInMonth(dates[1].getMonth(), dates[1].getFullYear()), dates[1].getDay());
    return Array.of(reducedDatesCurrentDate, reducedDatesDecember);
}

function getDayOfWeek(dayOfWeek) {
    var days = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
    return days[dayOfWeek];
}

/* Return the date in dd.mm.yyyy format*/
function formatDate(date) {
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}

/* Return time in hh:mm:ss format*/
function formatTime(date) {
    return date.toTimeString().split(" ")[0];
}

function formatFullDate(date, metaData) {
    return "Дата: " + formatDate(date) + ", час: " + formatTime(date) + ", " + getDayOfWeek(metaData[1]) + ", " + metaData[0] + " дни";
}

function formatDatesFromArray() {
    var dates = getArrayWithDate();
    var metaData = calculateDaysOfMonthAndWeekDay();
    return Array.of(formatFullDate(dates[0], metaData[0]), formatFullDate(dates[1], metaData[1]));
}

