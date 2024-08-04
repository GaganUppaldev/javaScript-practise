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

//event handlers and callback are kind of asnchronous code because they can notify user after thir task will be over but more details about it is in js documentation


//using fetch api

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});//see in out put that this process continued but code beind also started and even completed task before it 

console.log("Started request…");

//fetching data  using json methid
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise2
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });//we got data from json file and printed it in console which is baked bean


//final code 
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise3
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });//fetch failed error we got is from here

//combining all promices
const fetchPromiseA = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromiseB = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromiseC = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromiseA, fetchPromiseB, fetchPromiseC])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
