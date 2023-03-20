const bill = 10;
let tip;
bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.20 * bill
console.log(tip);
console.log(`The total value is ${tip + bill}`);