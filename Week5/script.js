console.log ('Hello World')
console.log ('My name is munirat')
console.log (6 - 10)


let myStatus = 'ok';
console.log (myStatus)


myStatus = 'Tired'
console.log (myStatus)


let fun = document.getElementById('heading');

fun.textContent = "myStatus"
fun.style.color = "green"
fun.style.backgroundColor = 'red'
console.log(fun)


// Data Type
// strings, number, boolean, array, object

let myHouse = 'Beautiful House'
let student = "Catherine"
let tutor = 'Tamara'

// concactenation of strings
let joined = "hi there" + ", my name is tamara";
console.log(joined);

let joined2 = myHouse + " " + tutor;
console.log(joined2);

let yourAge = 55;
console.log(typeof joined)
console.log(typeof joined2)
console.log(typeof yourAge)


let pi = 3.14;

let radius = 7;

let diameter = radius + 2;

console.log(diameter);

let isMarried = true;
console.log(isMarried);

// strings datatype
let str = 'Learning Javascript'
str.toUpperCase()

console.log(str)


str = str.toUpperCase()

console.log(str)

str = str.toLowerCase()

console.log(str);

console.log(str.includes())
console.log(str.startsWith())
console.log(str.endsWith())


console.log(str.indexOf())
console.log(str[13])

console.log(str.slice(3, 4))
console.log(str.slice(2, -1))

// number datatype
let dogAge = 17

dogAge = dogAge.toString()

// console.log(dogAge.toString())
console.log(typeof dogAge)   

console.log(dogAge)

let stringedNum ='65.5'
stringedNum = +stringedNum
stringedNum = Number(stringedNum)
stringedNum = parseInt(stringedNum)

console.log(typeof stringedNum)

console.log(stringedNum)

console.log(typeof NaN)


let weight = 67.9504373745758
console.log(Math.round(weight));
console.log(Math.floor(weight));
console.log(Math.ceil(weight));

console.log(Math.floor(Math.random() + 50))

console.log(weight.toFixed(3))


// Boolean

// falsey Values - 0, false, undefined, null, '', NaN
// truthy Values - 0.1, true, 'g', etc


// conditionals
// const gravity = 20

// console.log(gravity >= 30)

// if (gravity > 30) {
//     console.log('Gravity is hugee')
// }


let thisNum = '34'

// lazy comparison
console.log(thisNum == 34)
// strict comparison
console.log(thisNum === 34)

// type conversion
console.log('23' + 23);
console.log('23' == 23);
console.log('23' === 23);



const gravity = 20
let weAreFloating = false;

console.log(gravity > 30);

if (gravity > 30) {
    console.log('Gravity is hugee');
    weAreFloating = true;
} else {
    console.log('gravity is quite small');
    weAreFloating = false;
}

console.log(weAreFloating)
// comparison operators
console.log(gravity == 31)


if (NaN) {
    console.log('truthy');
} else {
    console.log('falsy');
}


// small - 8-10, medium - 11-12, large - 13-15, xl - 16-18
// and operator &&
// or operator ||
let size = 0
if (size >= 8 && size <= 10)
     {
    console.log('Your size is small');
} 
else if ('size >= 11 && size <= 12') {
    console.log('Your size is medium');
}
else if ('size >= 13 && size <= 15') 
    {
    console.log('Your size is large');
} 
else if ('size >= 16 && size <= 18') 
    {
    console.log('Your size is xl');
} 
else {
    console.log('We don\'t have your size');
}


let weatherIsGood = true;

if (weatherIsGood  !=false) {
    console.log('i am going out');
} else {
    console.log('i am staying home');
}

if (!weatherIsGood) {
    console.log('i am staying home');
}

console.log(!false)


weatherIsGood == true ? console.log('going out') : console.log('staying home');


let goingOutStatus = weatherIsGood == true ? 'Yes' : 'No';

let goingOutStatus2;

if (weatherIsGood == true) {
    goingOutStatus2 = 'Yes'
    let var7 = 'variable 7'
    console.log(var7)
} else {
    goingOutStatus2 = 'No';
    // console.log(var7)
}

console.log(var7)






