console.log('Hello');
// alert('Are you ok');

var x = 'smoothie';
console.log(x);

var num = '43'
console.log('num');

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = 'Your age is ' + age ;

//                                              ++++++++++Numbers in JS+++++++++++++++

var num1 = 10;

//Increment Num 1 by 1
num1++;
console.log(num1);

//Decrement Num 1 by 1
num1--;
console.log(num1);

//Devide/ , Multiply* , Reminder %
console.log(num1 % 6);

// Increment / Decrement by 10
num1 += 10;
console.log(num1);

/* 
                                                     +++++++++++++++Functions in JS+++++++++++
    1. Create A Funtion
    2. Call the Funtion
*/

// 1. Create A Funtion
function fun() {
    console.log('This is a funtion');
}

// 2. Call the Funtion
fun();

/*Lets create a function that take in a name
and says Hello followed by your name

EX:
Name: "Imran"
Return: "Hello Imran"
*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; //String Concatention
    console.log(result);
    
}
// var nameVariable = prompt('What is your name?');
// greeting(nameVariable);

//How do arguments work in Functions?
//How do we add 2 numbers together in a funtion?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result)
}

// sumNumbers(10, 10);

//                                                   +++++++++++++Loops in JS++++++++++++++

/* 
//While Loop
var number = prompt('Write a number');

while(number < 100) {
    number++;
    console.log(number);
} 

 */
/* 
// For Loop
for(var numberX =90; numberX<100; numberX++){
    console.log(numberX);
}
 */


//                                                  +++++++++++++ Data Types +++++++++++++++++

let myAge = 22; //Number
let myName = 'Imran'; //String
let name = {first: 'John', last: 'Clara'}; //Object
let truth = false; //Boolean
let groceries = ['apple', 'banana', 'orange']; //Array
let random; //Undefined
let nothing = null; //value null

//                                                   ++++++++ Strings in JS (Common Methods) +++++++++

let fruit = 'bananaq,apple,orange';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //Split by a comma
console.log(fruit.split(''));  //Split by charecter