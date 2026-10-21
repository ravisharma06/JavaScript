// Level 2 — Easy to Medium (11–20)

// 11. Check whether a year is a leap year.


let prompt = require('prompt-sync')();

// let year = Number(prompt("enter a year "))


// if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) console.log("leap year")
// else console.log("not leap year")

// 12. Check whether a character is a vowel or consonant.

// let character = prompt("enter the character ")

// switch (character) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u": console.log("vowel")
//         break;

//     default: console.log("consonant")
//         break;
// }


// 13. Calculate a student's grade based on marks: A (90–100), B (75–89), C (60–74), D (40–59), F (below 40).


// let marks = Number(prompt("enter marks "))

// if (marks >= 90 && marks <= 100) console.log("A")
// else if (marks >= 75 && marks <= 89) console.log("B")
// else if (marks >= 60 && marks <= 74) console.log("C")
// else if (marks >= 40 && marks <= 59) console.log("D")
// else if (marks < 40) console.log("F")



// 14. Check whether three given sides can form a valid triangle.   


// let a = Number(prompt("enter a "))
// let b = Number(prompt("enter b "))
// let c = Number(prompt("enter c "))


// if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     console.log("valid triangle")
// }
// else {
//     console.log("not valid triangle ")
// }


// 15. Calculate profit, loss, or neither using cost price and selling price.


// let sellingPrice = Number(prompt("enter the selling price "))
// let costPrice = Number(prompt("enter the cost price "))

// if (sellingPrice > costPrice) console.log("Profit")
// if (sellingPrice < costPrice) console.log("Loss")
// if (sellingPrice === costPrice) console.log("Neither profit nor loss")


// 16. Calculate a discount: up to ₹5,000 = 0%, ₹5,001–₹7,000 = 5%, ₹7,001–₹9,000 = 10%, above ₹9,000 = 15%.

// let amount = Number(prompt("enter amount "))

// let discount = 0
// if (amount > 0 && amount <= 5000) discount = 0
// if (amount > 5000 && amount <= 7000) discount = 5
// if (amount > 7000 && amount <= 9000) discount = 10
// if (amount > 9000) discount = 15

// console.log(discount)

// 17. Create a traffic signal program using switch.

// let signal = prompt("enter the singleLight ")

// switch (signal) {
//     case "red": console.log("stop")
//         break;
//     case "yellow": console.log("wait")
//         break;
//     case "green": console.log("go")
//         break;
//     default: console.log("Invalid signal")
//         break;
// }

// 18. Calculate a movie ticket price based on age: under 5 = free, 5–17 = ₹100, 18–59 = ₹200, 60+ = ₹120.

// let age = Number(prompt("enter the age "))


// if (age < 5) console.log("free")
// else if(age > 5 && age <=17) console.log("₹100")
// else if(age > 18 && age <= 59) console.log("₹200") 
// else if(age > 60) console.log("₹120")


// 19. Check whether a number lies within the range 1–100.

// let number = Number(prompt("enter the number "))

// if(number >=1 && number <=100) console.log("lies with in range 1-100")
// else console.log("not lies with in range 1-100")


// 20. Check login credentials using a username and password.


let username = "amit"
let password = "amit@123"

let name = prompt("enter the name ")
let userPassword =  prompt("enter the password")
console.log(username, password, name, userPassword)

if (name === username && userPassword === password) console.log("login")
else console.log("login failed")