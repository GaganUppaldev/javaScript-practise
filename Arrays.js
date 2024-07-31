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

//slice : used to remove items or elements from an array if we know index
const mission = ["Alpha" ,"delta" ,"gama",]
console.log(mission) 

const missionvalue = mission.indexOf("gama")
if (missionvalue !== -1) {
  mission.splice(missionvalue, 1); //here 1 refer to 
//number of element we want to remove, if we convert it 2 than it will remove one more next element means total remove will be of two elements ,eg if we add lol in mission array and replace 1 with 2 than gamma and lol both removed
}
console.log(mission)

//Acessing every item from array

//using for of  statement
const acess = ["john" , "jane" , "james" , "jimmy" , "joseph"]
console.log(acess);

for (const aces of acess){
  console.log(aces);
}// we got each item seprately

//using map

//cretaed function named multiply and gave acess to each item inside array named triple
function multiply(tripl){   
  return tripl * 3;
}
const triple = [1,2,3,4,5]
const final = triple.map(multiply);//used map to multiply each item inside array
console.log(final); 

//filter
//used to create a new array with all items that pass the test

function Verify(countrie){
  return countrie.length > 5;
}

const countries = ["usa" , "uk" , "india" , "australia" , "canada" ]

const verified = countries.filter(Verify);
console.log(verified)

//conversion between strings and arrays
const planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
console.log(planets)// all planents 
//Now see length of array plants
console.log(planets.length);//lenth is 8
console.log(planets[0])//mercury is output

//But problem rises here , This is how react framerwork takes input from user by they default it covert input to string for security reasons so important to learn from this case

const level =  "high,mid,low"//Now this is string 
console.log(level)
console.log(level[0]) //h will be the out put
//Now lets solve this By use of split method
const split = level.split(",");//split where (, ) is present)
console.log(split)
console.log(split[0])//Now it will return high
console.log(split.length) // length is 3
console.log(split.length-1) //It will return index of last item inside array here is 2 , as 0,1,2

//Join method is exact similar to split method

//tostring method : used to convert array to string
const Birds = ["parrot" ,"peacock","owl","sparrow"]
console.log(Birds)
console.log(Birds[0])

const end = Birds.toString()
console.log(end[0])
