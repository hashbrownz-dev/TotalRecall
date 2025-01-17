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
//      define - when we define a variable, we declare it and assign a value to it

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

//Talk about it

//  What are the things in an array called?
//  Elements
//  Do Arrays guarantee those things will be in order?
//  Yes!
//  What real-life thing could you model with an array?
//  Any ordered or unordered list like a shopping list, a to-do list, or a list of names or birthdays.
//  Any kind of container or vessel that holds other things, like a closet, or drawer or chest.

//Easy Does It

const quotes = [
    'Wubba Lubba Dub Dub!',
    "What, so everyone's supposed to sleep every single night now?  You realize that nighttime makes up half of all time?",
    "Boom!  Big reveal!  I turned myself into a pickle!"
];

//Accessing Elements
const randomThings = [1, 10, "Hello", true];
//Access the 1st element in the array
randomThings[0];
//Change the value of "Hello" to "World"
randomThings[2] = "World";
console.log(randomThings);

//Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//Access the 3rd element of the array
ourClass[2];
ourClass[ourClass.length - 1] = 'Octocat';
ourClass.push("Cloud City");

//Mix It Up

const myArray = [5,10,500,20];

myArray.push("Aegon");
myArray.push("Scourge of Iron");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

//  Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
//  Yes I did mutate the array. When we mutate an object, we change the initial object.  methods like Array.prototype.reverse() and Array.prototype.sort() make changes to the array that calls them, while methods like Array.prototype.slice() do NOT change the array that calls them.  Yes, the .reverse() method returns a reference to the original array after the mutation.

//Biggie Smalls

let myInt = 100;
if(myInt < 100){
    console.log('little number');
} else {
    console.log('big number');
}

//Monkey in the Middle
if(myInt < 5){
    console.log('little number');
} else if(myInt > 10){
    console.log('big number');
} else {
    console.log("monkey");
}

//What's in Your Closet?
const kristynsCloset = [
"left shoe",
"cowboy boots",
"right sock",
"GA hoodie",
"green pants",
"yellow knit hat",
"marshmallow peeps"
];
const thomsCloset = [
[
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
]
];
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
kristynsCloset.splice(6,0,"raybans");
kristynsCloset[5] = "stained knit hat";
// Let's Dress Thom
const thomsShirt = thomsCloset[0][3];
const thomsPants = thomsCloset[1][1];
const thomsAccessory = thomsCloset[2][2];

console.log(`Thom is looking fierce in a ${thomsShirt}, ${thomsPants}, and ${thomsAccessory}!`);
thomsCloset[1][2] = "Footie Pajamas";

//FUNCTIONS

//printCool
function printCool(name){
    return name + ' is cool!';
}
console.log(printCool('Johnny'));

//calculateCube
function calculateCube(num){
    return num * num * num;
}
console.log(calculateCube(5));

//isVowel
function isVowel(char){
    const vowels = ['a','e','i','o','u'];
    return vowels.includes(char.toLowerCase());
}

//getTwoLengths
function getTwoLengths(string1, string2){
    return [string1.length, string2.length];
}

//getMultipleLengths
function getMultipleLengths(strings){
    const output = [];
    for(let string of strings){
        output.push(string.length);
    }
    return output;
}

//maxOfThree
function maxOfThree(a,b,c){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    return max;
}

//printLongestWord
function printLongestWord(words){
    let longest = words[0];
    for(let i = 1; i < words.length; i++){
        if(words[i].length > longest.length) longest = words[i];
    }
    return longest;
}

//OBJECTS

//Make a User Object
const user = {
    name:'Violet',
    email:'violet@coolkid.com',
    age:'8',
    purchased:[]
};

//Update the user
user.email = 'violet@thehotmail.com';
user.age++;

//Adding keys and values
user.location = "Dad's House";

//Shopaholic!
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[user.purchased.length - 1]);

//Object Within Object
user.friend = {
    name:'Scarlett',
    age:10,
    location:'Aurora, CO',
    purchased:[]
};
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[user.friend.purchased.length - 1]);

//Loops
for(let item of user.purchased){
    console.log(item);
}

for(let item of user.friend.purchased){
    console.log(item);
}

//Functions can operate on objects
function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
}

//cat Combinator

const cat1 = {
    name:'Fitz',
    breed:'Calico',
    age:8,
    sayAge:function(){console.log(this.age)},
    sayBreed:function(){console.log(this.breed)}
};

const cat2 = {
    name:'Mable',
    breed:'Tabby',
    age:7
}

function combineCats(cat1, cat2){
    const   {name: cat1Name, breed: cat1Breed} = cat1,
            {name: cat2Name, breed: cat2Breed} = cat2;
    return {
        name: cat1Name + cat2Name,
        breed: cat1Breed + '-' + cat2Breed,
        age: 1
    }
}

combineCats(cat1,cat2);

console.log(
    combineCats(
        combineCats(
            combineCats(cat1,cat2), combineCats(cat1,cat2)
        ),combineCats(
            combineCats(cat1,cat2),combineCats(cat1,cat2)
        )
    )
);