/*
Exercise 1: Grading System
Problem: 
Write a program that takes a student's score (0-100) and prints their grade according to the following scale:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F
*/

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // Output: B


/*
Exercise 2: Traffic Light System
Problem:
Write a program that takes a traffic light color ("red", "yellow", "green") as input and prints the corresponding action:

"red" -> "Stop"

"yellow" -> "Slow down"

"green" -> "Go"
*/

function trafficLightAction(color) {
    switch(color.toLowerCase()) {
        case "red":
            return "Stop";
        case "yellow":
            return "Slow down";
        case "green":
            return "Go";
        default:
            return "Invalid color";
    }
}

console.log(trafficLightAction("Green")); // Output: Go


/* 
Exercise 3: Even or Odd Number
Problem:
Write a program that takes an integer and prints whether it is "Even" or "Odd". 
*/

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7)); // Output: Odd

/* 
Exercise 4: Days of the Week

Problem:
Write a program that takes a number (1-7) as input and prints the corresponding day of the week:

1: Monday

2: Tuesday

3: Wednesday

4: Thursday

5: Friday

6: Saturday

7: Sunday
*/

function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log(getDayOfWeek(4)); // Output: Thursday