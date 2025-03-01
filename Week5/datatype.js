// 1. declare variables
let firstName = "Munirat"
let lastName = "Salmon"
let country = "Nigeria"
let city = "Lagos"
let age = 27
let isMarried = false
let year = 2025

console.log(typeof firstName,typeof lastName, typeof country,typeof city,typeof age, typeof isMarried, typeof year)

// 2.
console.log("10" == 10)
console.log("10" === 10)

// 3
console.log(parseInt("9.8") == 10)

// 4 boolean
console.log(age === 27)
console.log(age >= 27)
console.log(age < 50)

console.log(firstName == city)
console.log("Modupe" == "dupe")
console.log(year === 2019)


// 5
console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4 === '4'))

// 6
let base = prompt("enter base")

const height = prompt("enter height")
let area = 0.5 * base * height
console.log("the area of a triengle is", area) 

// 7
let userYear = Number(prompt("enter your year"))
    if (2025 - userYear >= 18) {
        console.log("You are " + (2025 - userYear) + " old enough to drive")     
    } else {
        console.log("You are " + (2025 - userYear) + " not old enough to drive")   
    }

// 8
let challenge;
challenge = "30 Days Of JavaScript"

// 9 
challenge = challenge.toUpperCase()

// 10
challenge = challenge.toLowerCase()

// 11
console.log(challenge.slice(3))

// 12
console.log(challenge.slice(0, 2))

// 13
console.log(challenge.includes("Script"))

// 14
console.log(challenge.indexOf("a"))

// 15
console.log(challenge.lastIndexOf("a"))

// 16
let sentence = "You cannot end a sentence with because because is a conjuction"
console.log(sentence.indexOf("because"))

// 17
console.log(challenge.startsWith("30"))

// 18
console.log(challenge.endsWith("pt"))

// 19
console.log(Math.random())

// 20
let a = 7
let b = 22
// if else
if (a > b) {
    console.log("a is greater than b")
}else {
    console.log("a is not greater than b")
}
// ternary operator
let result = a > b ? "a is greater b" : "a is less than b"

console.log(result)


// 21
let scores;
  
  function assignGrade(score) {
    if (score >= 80 && score <= 100) {
      return "A";
    } else if (score >= 70 && score <= 89) {
      return "B";
    } else if (score >= 60 && score <= 79) {
      return "C";
    } else if (score >= 50 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 49) {
      return "E";
    }
  }
  console.log(assignGrade(99))