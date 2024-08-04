//JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often, so in this article, we give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.
//basic json structure

//below is object json

//THis is called object inside string or variable
const json =   //i added json variabile 
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
console.log(json.members[0].name);
console.log(json.members[1].name);
console.log(json.members[2].name);


//example

async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);//doing to url
  const superHeroesText = await response.text();//data of text

  const superHeroes = JSON.parse(superHeroesText);//getting final data
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}


function populateHeader(superHeroes) { //func
  
  console.log('Header populated with:', superHeroes);
}

function populateHeroes(superHeroes) { //func 
  
  console.log('Heroes populated with:', superHeroes);
}


populate();

const first = populateHeader;
const sec = populateHeroes;

console.log('First function:', first);
console.log('Second function:', sec);
//got data two from API and printed data










  
