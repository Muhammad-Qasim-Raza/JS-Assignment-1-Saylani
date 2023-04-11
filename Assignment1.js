// TASK#1
let num_1 = prompt("Enter first number:");
let num_2 = prompt("Enter second number:");

if (num_1 > num_2) {
    console.log(num_1 + " is larger");
} else if (num_2 > num_1) {
    console.log(num_2 + " is larger");
} else {
    console.log("Both numbers are equal");
}


// TASK#2
let number = prompt("Enter a number:");

if (number > 0) {
    alert("The sign is +");
} else if (number < 0) {
    alert("The sign is -");
} else {
    alert("The number is zero");
}


// TASK#3
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");
let num4 = prompt("Enter fourth number:");
let num5 = prompt("Enter fifth number:");

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}

console.log("The largest number is " + largest);


// TASK#4
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// TASK#5
let mark1 = +prompt("Enter mark 1:");
let mark2 = +prompt("Enter mark 2:");
let mark3 = +prompt("Enter mark 3:");
let mark4 = +prompt("Enter mark 4:");
let mark5 = +prompt("Enter mark 5:");
let mark6 = +prompt("Enter mark 6:");

let averageMarks = (mark1 + mark2 + mark3 + mark4 + mark5 + mark6) / 6;

let grade;
if (averageMarks < 60) {
    grade = "F";
} else if (averageMarks < 70) {
    grade = "D";
} else if (averageMarks < 80) {
    grade = "C";
} else if (averageMarks < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log("The average marks is " + averageMarks + " and the grade is " + grade);


// TASK#6
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// TASK#7
let pattern = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("</br>");

    pattern += '*';
    console.log(pattern);
}