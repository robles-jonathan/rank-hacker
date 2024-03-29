"use strict";
//Day zero Problem one
// Overview: 10 Days of JavaScript
// This series focuses on learning and practicing JavaScript. Each challenge comes with a tutorial article, and you can view these articles by clicking either the Topics tab along the top or the article icon in the right-hand menu.
//
//     Objective
//
// In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.
//
// Task
//
// A greeting function is provided for you in the editor below. It has one parameter, parameterVariable. Perform the following tasks to complete this challenge:
//
//     Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
//     Use console.log() to print the contents of parameterVariable (i.e., the argument passed to main).
// You've got this!
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}
greeting("Welcome to 10 Days of JavaScript!");

//Day zero Problem two
// Objective
//
// Today, we're discussing data types. Check out the attached tutorial for more details.
//
// Task
//
// Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:
//
//     Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
//     Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
//     Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.



/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    let sumOfFirstIntAndSecondInt = parseInt(secondInteger)+firstInteger;
    console.log(sumOfFirstIntAndSecondInt);

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    let sumOfFirstDecimalAndSecondDecimal = parseFloat(firstDecimal)+parseFloat(secondDecimal)
    console.log(sumOfFirstDecimalAndSecondDecimal);
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

performOperation(12,4.32,"is the best place to learn and practice coding!")


//Day One Arithmetic Operations

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length*width
    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2*(length+width)
    return perimeter;
}
console.log(getArea(3, 4.5));
console.log(getPerimeter(3, 4.5));

//Day one - Functions


/*
 * Create the function factorial here
 */
function factorial(n){
    if( n === 0){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(4));