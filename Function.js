//Functions 
//functions  allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command


//Functions are part of object and inside ibject they are called Methods


//Their are two type of functions , Build-in fuctions(avilable by default in js) and custom function (that user create)


const array = ["I","LOVE","javaScript"];
const madestring = array.join(" ")//used join command oppostite of split()
console.log(madestring)


//Math.random function
//create random 2 word code 
const Random =[0,1,2,3,4,5,6,7,8,9,]
const len = 1000
const gen = Math.random()*len
console.log(gen)

const Random2 = ["a" ,"b","c","d","e","f","g","h","i","j"]
const gen2 = Random2[Math.floor(Math.random())*Random2.length];
console.log(gen2)

const end = `${gen} ${gen2}`
console.log(end)


//invoking function

function myFunction() {
  console.log("hello")
}

myFunction(); // calls the function once

//replace function
const comment = "hello , i am obsessed with javaScript";
const Newcomment = comment.replace( "javaScript","programming")
console.log(Newcomment)

//Default parameters

function hello(name = "john"){
  console.log(`Welcome Sir ${name}`)
}


hello();

//function withoutname
(
  function (){
    console.log("wothout name fuction is here")
  }
)
//Above function without name is called anonymous function

//Below  are 5 ways to pass anonymus function in js
// 1 >By assigning with variable
let showMessage = function() {
  console.log('Anonymous function');
};
showMessage(); // Outputs: "Anonymous function
// 2>By passing as an argument
setTimeout(function() {
  console.log('Execute later after 1 second');
}, 1000);
//3>immidatly invoked fuction
(function() {
  console.log('IIFE');
})();
// Outputs: "IIFE"

//4>By passing argument from other argument
let person = { firstName: 'John', lastName: 'Doe' };
(function() {
  console.log(person.firstName + ' ' + person.lastName);
})(person);
// Outputs: "John Doe"

//5>Arrow function
let show = () => {
  console.log('Arrow function');
};
show(); // Outputs: "Arrow function"
