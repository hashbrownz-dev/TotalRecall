// STRINGS 
//  1.  How do we assign a value to a variable?
//      We can assign a value to a variable with an assignment operator such as '='
//      let myVariable = 'changed'

//  2.  How do we change the value of a variable?
//      Once we've declared a variable, we can change the value using an assignment operator.
//      let myVar = 3;
//      myVar = 6;

//  3.  How do we assign an existing variable to a new variable?
//      let myVar1 = "tree";
//      let myVar2 = "nut";
//      myVar1 = myVar2;

//  4.  Remind me, what are declare, assign, and define?
//      declare - when we declare a variable, we create a container to store data in.  We can declare a variable 4 ways: with var, let, const, and without a keyword.  When declaring a variable with const, we must assign a value to the variable.
//      assign - assignment is when we put data into into our container (variable).
//      define - 

//  5.  What is pseudocoding and why should you do it?
//      Pseudocode is when you describe the function of your code using plain English.  Writing pseudocode allows us to focus on the logic and behavior of our code without worrying about things like syntax and code patterns.  It also helps us to take large or complex problems and begin to break them down into smaller, more manageable problems.

//  6.  What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//      I try to use the 80/20 rule, with 80 percent of my time spent on pseudocode, as logical problem solving is a huge part of coding.  Once the logic of the program is sorted out, translating it into actual code is relatively quick.

let firstVariable = "Hello World";
firstVariable = 1234;
let secondVariable = firstVariable;
secondVariable = "Goodbye World";

//What is the value of firstVariable?
//1234

const myName = "Roosevelt Blow";
console.log('Hello, my name is ' + myName);

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');

console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//the Farm
let animal = 'cow';
console.log(animal === 'cow' ? "mooooooo" : "Hey!  You're not a cow!");

//Driver's Ed
let personsAge = 16;
console.log(personsAge >= 16 ? "Here are the keys!" : "Sorry, you're too young.");


//LOOPS

//The Basics
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i = 10; i <= 400; i++){
    console.log(i);
}
for(let i = 12; i <= 4000; i+=3){
    console.log(i);
}

//Get Even
for(let i = 1; i <= 100; i++){
    !(i%2) ? console.log(i + '<--is an even number') : console.log(i);
}

//Give Me 5
for(let i = 0; i <= 100; i++){
    //if(i > 0 && !(i%5)) console.log(`I found a ${i}. High five!`);
    let output = '';
    if(i > 0 && !(i%3)) output += `I found a ${i}. Three is a crowd. `;
    if(i > 0 && !(i%5)) output += `I found a ${i}. High five!`;
    if(output)console.log(output);
}

//Savings Account
let bankAccount = 0;
for(let i = 1; i <= 10; i++){
    bankAccount += i;
}
let bonusAccount = 0;
for(let i = 1; i <= 100; i++){
    bonusAccount += i * 2;
}


//ARRAYS & CONTROL FLOW



