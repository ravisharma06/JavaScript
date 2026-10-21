// Level 1 — Easy (1–10)
const prompt = require('prompt-sync')()

const num = Number(prompt("enter a num "));



// 1. Check whether a number is positive, negative, or zero.



// if (num > 0) console.log("postive")
// else if (num < 0) console.log("negative")
// else console.log("zero")




// 2. Check whether a number is even or odd.
// if(num % 2 === 0) console.log("even")
// else console.log("odd")

// 3. Check whether a person is eligible to vote based on age.
// let voteAge  = 18;


// if(num >= voteAge) console.log("eligible to vote")
// else console.log("not eligible to vote")



// 4. Find the greater of two numbers.
// let num2 = Number(prompt("enter the num2 "))


// if (num > num2) console.log("num1 is greater")
// else if (num === num2) console.log("num and num2 are equal")
// else console.log("num2 is greater")

// 5. Check whether a number is divisible by 5.

// if (num % 5 === 0) console.log("number is divisible by 5")
// else console.log("number is not divisible by 5")

// 6. Find the largest of three numbers.

// let num2 = Number(prompt("enter the num2 "))
// let num3 = Number(prompt("enter the num3 "))

// if (num === num2 && num2 === num3) {
//     console.log("all numbers are equal")
// }
// else if (num === num2) {
//     console.log("num and num2 is equal")
// }
// else if (num2 === num3) {
//     console.log("num2 and num3 is equal")
// }
// else if (num3 === num) {
//     console.log("num and num3 is equal")
// }
// else {
//     if (num > num2 && num > num3) console.log("num is greater")
//     else if (num2 > num3 && num2 > num) console.log("num2 is greater")
//     else console.log("num3 is greater")

// }




// 7. Check whether a student passed or failed (passing marks: 40).

// let passingmarks = 40;



// if (num >= passingmarks) console.log("student is passed")
// else console.log("student failed")


// 8. Print the day of the week using a number from 1 to 7 (switch).


// switch (num) {
//     case 1: console.log("Monday")
//         break;
//     case 2: console.log("Tudesday")
//         break;
//     case 3: console.log("Wednesday")
//         break;
//     case 4: console.log("Thursday")
//         break;
//     case 5: console.log("Friday")
//         break;
//     case 6: console.log("Saturday")
//         break;
//     case 7: console.log("Sunday")
//         break;
//     default: console.log("Invalid number")
//         break;
// }



// 9. Build a calculator for addition, subtraction, multiplication, and division using switch.



// console.log("Addition press 1 ")
// console.log("Substraction press 2 ")
// console.log("Multiplication press 3")
// console.log("Divison press 4 ")
// const num = Number(prompt("enter a num "));



// switch (num) {
//     case 1: {
//         const num1 = Number(prompt("enter the num1 "))
//         const num2 = Number(prompt("enter the num2 "))
//         console.log(`Addtion of ${ num1 } and ${ num2 } : ${ num1 + num2 }`)
//     }
//         break;
//     case 2: {
//         const num1 = Number(prompt("enter the num1 "))
//         const num2 = Number(prompt("enter the num2 "))
//         console.log(`Substration of ${ num1 } and ${ num2 } : ${ num1 - num2 }`)
//     } break;

//     case 3: {
//         const num1 = Number(prompt("enter the num1 "))
//         const num2 = Number(prompt("enter the num2 "))
//         console.log(`Multiplication of ${ num1 } and ${ num2 } : ${ num1 * num2 }`)
//     } break;

//     case 4: {
//         const num1 = Number(prompt("enter the num1 "))
//         const num2 = Number(prompt("enter the num2 "))
//         console.log(`Divison of ${ num1 } and ${ num2 } : ${ num1 / num2 }`)
//     } break;
//     default: console.log("Invalid option press correct number")
//         break;
// }





// 10. Print the month name using a number from 1 to 12 (switch).


// switch (num) {
//     case 1: console.log("January")
//         break;
//     case 2: console.log("Febuary")
//         break;
//     case 3: console.log("March")
//         break;
//     case 4: console.log("April")
//         break;
//     case 5: console.log("May")
//         break;

//     case 6: console.log("June")
//         break;
//     case 7: console.log("July")
//         break;
//     case 8: console.log("Augest")
//         break;
//     case 9: console.log("September")
//         break;
//     case 10: console.log("October")
//         break;
//     case 11: console.log("Novmember")
//         break;
//     case 12: console.log("December")
//         break;
//     default: console.log("invalid number")
//         break;
// }