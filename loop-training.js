/*
Exercise 1: Sum of Numbers
Problem:
Write a program that calculates the sum of all numbers from 1 to a given number n using a loop.
*/

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(5)); // Output: 15

/*
Exercise 2: Multiplication Table
Problem:
Write a program that prints the multiplication table of a given number n up to 10.
*/

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(3);
// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

/*
Exercise 3: Fibonacci Sequence
Problem:
Write a program that prints the first n numbers of the Fibonacci sequence.
*/

function fibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 0; i < n; i++) {
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
}

fibonacci(5);
// Output:
// 0
// 1
// 1
// 2
// 3


/* 
Exercise 4: Reverse a String
Problem:
Write a program that reverses a given string using a loop.
*/

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"