/**
 * 1. display the current day and time in the following format.
 * Sample Output : Today is : Tuesday.
 * Current time is : 10 PM : 30 : 38
 */
export function q1 () {
    const dayTime = new Date()
    const dayNumber = dayTime.getDay()
    let day
    switch (dayNumber) {
        case 0:
            day = 'Sunday'
            break
        case 1:
            day = 'Monday'
            break
        case 2:
            day = 'Tuseday'
            break
        case 3:
            day = 'Wensday'
            break
        case 4:
            day = 'Thurday'
            break
        case 5:
            day = 'Friday'
            break
        case 6:
            day = 'Saturday'
            break
    }

    const hours = dayTime.getHours()
    const minutes = dayTime.getMinutes()
    const seconds = dayTime.getSeconds()
    return 'Today is : ' + day + ', Current time is : ' + hours + ':' + minutes + ':' + seconds
}

/**
 * 2. print the contents of the current window.
 */
export function q2 () {
    return window.print()
}

/**
 * 3. get the current date.
 * Expected Output :
 * mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.
 */
export function q3 () {
    const currentDate = new Date()

    const getDay = currentDate.getDate()
    const getMonth = currentDate.getMonth()
    const getYear = currentDate.getFullYear()

    return (getMonth + 1) + '-' + getDay + '-' + getYear + ', ' + (getMonth + 1) + '/' + getDay + '/' + getYear
}

/**
 * 4. find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 */

export function q4 () {
    const a = 5
    const b = 6
    const c = 7

    const p = (a + b + c) / 2
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3)

    return area
}

/**
 * 5. rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
 */

export function q5 () {
    const myString = 'W3resource'
    let myNewstring = ''
    let res
    for (let i = myString.length; i--;) {
        const endChar = myString[i]
        myNewstring += endChar
        res = myNewstring.concat(myString.substr(0, i))
    }
    return res
}

/**
 * 6. determine whether a given year is a leap year in the Gregorian calendar.
 */
export function q6 (givenYear) {
    if ((givenYear % 4 === 0) && (givenYear % 100 !== 0)) {
        return 'This is a leap year!'
    } else {
        return 'This is not a leap year!'
    }

}

/**
 * 7. find 1st January is being a Sunday between 2014 and 2050.
 */

export function q7 () {
    const date = new Date()
    for (let i = 2014; i < 2050; i++) {
        date.setFullYear(i, 0, 1)
        if (date.getDay() === 0) {
            return date.getFullYear()
        }

    }
}

/**
 * 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
 * the user is then prompted to input a guess number. If the user input matches with guess number,
 * the program will display a message "Good Work" otherwise display a message "Not matched".
 */

export const randomNumber = Math.floor(Math.random() * 10) + 1
export function q8 () {
    const getInputNumber = parseInt(document.getElementById('inputNumber').value)

    if (getInputNumber === randomNumber) {
        document.getElementById('output').innerHTML = 'Good Work'
    } else {
        document.getElementById('output').innerHTML = 'Not Matched'
    }

}

/**
 * 9. calculate days left until next Christmas.
 */

export function q9 () {
    const today = new Date()
    const date = new Date()
    date.setFullYear(date.getFullYear(), 11, 25)
    if (today.getMonth() === 11 && today.getDate() > 25) {
        date.setFullYear(date.getFullYear() + 1)
    }
    const timeForOneDay = 24 * 60 * 60 * 1000
    const days = (date.getTime() - today.getTime()) / timeForOneDay

    return days
}

/**
 *10. calculate multiplication and division of two numbers (input from user).
 * Sample form :
 * sample form
 */
export function q10 () {
    const getInput1 = document.getElementById('inputNumber1').value
    const getInput2 = document.getElementById('inputNumber2').value

    document.getElementById('muti').innerHTML = getInput1 * getInput2
    document.getElementById('divs').innerHTML = getInput1 / getInput2
}
