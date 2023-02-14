//________________NOTES________________________
//Function Scope - A variables declare inside any function can only be accessible in that function. ex- var
//Block scope - A variable declared within curly braces {} then called it's a block scope ex- let. 
// var and let - var has function scope and let has block scope.

//The 7 primitive data types
//1)Number: used for decimals and integers. let age= 23
//2)String: used for text letfirstname = "Jonas"
//3)Boolean: logical type thats used for true and false. used for taking decision let fullAge= true;
//4)Undefined
//5)Null
//6)Symbol(ES2015)
//7)BigInt(ES2020 )

//_______________Problem_Statements____________
//1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
//2. Log their values to the console

/*let country    = "India";
let continent  = "Asia";
let population = "1.2Billion"
console.log(country);
console.log(continent);
console.log(population);*/
//----------------------------------------------
//LECTURE: Data Types
//1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
//2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console

//let isIsland = false;
//let language;
//console.log(typeof isIsland);
//console.log(typeof language);
//----------------------------------------------
/*LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/
language = "Hindi";
const isIsland = false;
const country = "India";
const continent = "Asia";
//isIsland = true;Error - assignment.js:45 Uncaught TypeError: Assignment to constant variable at assignment.js:45:10.


    


