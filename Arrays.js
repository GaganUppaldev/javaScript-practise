//Creating an Array
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array)

//Finding length of Array
console.log(Array.length)

//Aceesing items inside Array
console.log(Array[0])

//Modifying items inside Array
const value = 20;
Array[0] = value;
console.log(Array);

//creating multidimentional array = An array inside an array

const multi = [2,4,["two","four",1]]
console.log(multi)
console.log(multi.length)
console.log(multi[2][0])//Acessing item inside multidimentional array

//Finding index of Array
console.log(Array.indexOf(5))
console.log(multi[2].indexOf("two"));//finding item index inside multidimentional array

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai"];
console.log(cities)

//push
cities.push("shimla") //push used to add item at the end of array
console.log(cities)

//unshift
cities.unshift("Manali")// unshift used to add item at the start of array
console.log(cities)

//to remove items from we use pop , shift and slice 

//pop = used to remove last item from array
const name = ["Ram", "Shyam", "Mohan", "Rohan"];
const removedname = name.pop();
console.log(removedname)//rohan removed
console.log(name)// see new list of items in array without mohan

//shift = used to remove first item from array
const removefirstname = name.shift();
console.log(removefirstname)//Ram name removed from first
console.log(name)//see new list of items in array without Ram
