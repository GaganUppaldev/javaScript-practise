//conditions-->

//if-else
let shoppingDone = false;
var childsAllowance = 0 
console.log(childsAllowance)//here zero will be printed

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)//result is 5 means 

//conditions
// ===,!== (test if one value is identiacal to another or not)
// >, <, >=, <=

//Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statemen

let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

let chee = "Cheddar";

if (chee == "charle") {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//Logical OR

let x = 10;

if (x === 5 || x === 7 || x === 10 || x === 20) {
  console.log("x is either 5, 7, 10, or 20");
} else {
  console.log("x is not 5, 7, 10, or 20");
}

let a = false;
let b = true;
let c = false;

if (a || b || c) {
  console.log("At least one condition is true.");
} else {
  console.log("All conditions are false.");
}
