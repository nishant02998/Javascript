// const ageNishant = 2023-1996;
// const agePrashant = 2023-2005;
// console.log(ageNishant, agePrashant);

// const firstName = 'Nishant';
// const lastName = 'Srivastava';
// console.log(firstName + " " + lastName);
// console.log(typeof firstName);
// console.log(2**3);// 2**3 means 2 to the power of 3 equals 2 * 2 * 2
// let x = 10 + 5;
// x += 10;
// x *= 2;
// x++;
// x--;
// console.log(x); 

// //Comparison operators
// console.log(ageNishant > agePrashant);
// console.log(ageNishant <= 18);

// const firstname = 'Nishant';
// const birthyear = 1996;
// const now = 2023;
// const job = 'Software engineer';
// const nish = "I'm " + firstname + ', a ' + (now - birthyear) + ' years old ' + job
// console.log(nish);

//Template literal
// const nishant = `I'm ${firstname}, a ${(now-birthyear)} years old ${job}`;
// console.log(nishant);
// console.log('String with \n\
// multiple \n\
// lines.');
// console.log(`String with
// multiple
// lines.`);

// const age = 17;
// const isOldEnough = age >= 18;

// //if else control structure
// if(isOldEnough){
//     console.log(`Nishant can apply for driving license 🚗`);
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Nishant is too young for driving license😅. Wait fo ${yearsLeft} year`);
// }


//Strict and loose equality operator, "==" & "==="
// const age = '18';
// if (age === 18) console.log("He is an adult '==='");
// if (age == 18) console.log("he is an adult '=='");

// const favourite = (prompt("What is your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//     console.log("23 is a good number");
// }else console .log("Not a 23");

// if(favourite !== 23) {
//     console.log("Type is not matching :)");
// }

//Ternary operators
const age = 23;
age >= 18 ? console.log("I like to drink beer") : console.log("I like to drink water")

const drink = age >= 18 ? `Wine 🍷` : `Water 🥤`
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'Wine':'Water'}`)