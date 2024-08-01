//Loops


//1> Looping through collection
//for-of Loop
const fishs = ["phirana", "nemo", "dory", "marlin", "gill", "bloat", "nigel"]

for (fish of fishs){
  console.log(fish)
}

//map

function uppercase(fishs){
  return fishs.toUpperCase()
}

const upperfish = fishs.map(uppercase)
console.log(upperfish)//return in upfercase

//filter
  
function name(fishs) {
  return fishs.startsWith("g")
}

const extract = fishs.filter(name)
console.log(extract)

//Way to do this with use of callback and not creating fucnction

const extract2 = fishs.filter((fishs) => fishs.startsWith("g"))//here i suppored from error startsWith W is capital 
console.log(extract2)

//Note js is case sensitive and startsWith "W" is capital

//2> standard loop 

//used when we to run same code multiple times
/* BASIC SUNTAX BELOW
for (initializer; condition; final-expression) {
  // code to run
}*/
function cal(){
  //const empty = []; //initialized an empty array
  for(let i = 1 ; i <=10 ; i++) {
    const sol = `2 * ${i} = ${2*i}`
    console.log(sol)
    
    
  }
  //return empty // returned an empty array
}

//const work = cal()
//console.log(work) // Returning table of 2 very perfect but was showing undefined at end beacuse function cal was not returning anything so lets solve that , Two ways first only just type cal() and remove work but i will return an empty array to solve this problem 
//But first approch is best so i am now applying that it will return [] at end

cal()//worked perfectly 

//Doing for-of example with standard loop

const elements = ["Nitrogen" , "sodium" ,"oxygen"]
// we will use elements.lenth
for (let i = 0 ; i < elements.length ; i++){

  console.log(elements[i])
  
}
//above undifened problem was caused due to i <= elements.length because there is nothing at index 3 so it will show undefined so to fix it only < to get items till 0,1,2
