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
