//Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

//synchronus code

//here code will be run line by line
const name = "Jonathan"; //start this code and stop util this line is done
const welcome = `hello ${name}`;//after completeing above line start this line
//than wait for above line to complete and than start next  line
console.log(welcome)

//This is also a synchronus function
function makeGreeting(id) {
  return `Hello, my ID is ${id}!`;
}

const id= 421;
const greeting = makeGreeting(id);
console.log(greeting);

//synchronus code take alot of time and very slow
//code will run line by line and this will be a time waste so to counter we will  use asynchronus code
