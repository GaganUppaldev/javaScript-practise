//objects 
//An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects)

//it play role as dictionary in python 

const data = {
  name : ["john","smith" ,"peter","tony"],
  name2 :{
    firstname : "john",
    secondname : "smith",
    thirdname : "peter",
    lastname : "tony",
      
  
  },
  age : 32,
  gender : "male",
  bio() {
    console.log(`these names are ${this.name} and their age is ${this.age}`);
  },
  introductionself(){
    console.log(`hi i am ${this.name[0]}`)//this is taught down
  }
  
}

//dot notation
console.log(data.name);
console.log(data.name[0]);
console.log(data.age);
console.log(data.gender);
data.bio(); //don't call them with console method
data.introductionself();
console.log(data.name2.lastname);

//Bracket notation
console.log(data["name"][0]);
console.log(data["name2"]["secondname"]);
console.log(data["age"])

//setting object memebers

//updating property
data.age = 45;
console.log(data.age); //age updated 

const end = data.name2.lastname ;
console.log(end)//tony

/*const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;*/
//we can  also define variables using this


//What is this ?
/*The this keyword typically refers to the current object the code is being executed in. In the context of an object method, this refers to the object that the method was called on.*/

//contructors inside class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old
