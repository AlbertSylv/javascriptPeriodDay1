//1a
var myArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]
var withA = myArray.filter(name => name.includes('a'))

console.log(myArray);
console.log(withA);

//1b
var reversed = myArray.map(name => name.split("").reverse().join(""))
console.log(reversed);


//2a
function filterA(thing) {
    if(thing.includes("a") == true){
        return thing;
    } 
    
  } 

function myFilter(array, callback) {
    let filterArray = [];
    array.forEach(element => {
      const newItem = callback(element)
      filterArray.push(newItem)
    });
    //forstår ikke hvorfor det her ikke virker og kan ikke finde ud af at debugge i det her IDE..
    let tal = 0;
    filterArray.forEach(thang => {if(thang === undefined){filterArray.splice(tal,1)} tal++ })
    return filterArray;
 };

  console.log(myFilter(myArray,filterA))

  //2b
  function reverseee(name) {
    var reved = name.split("").reverse().join("")

    return reved;
    
  } 
  

  function myMap(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
      const newItem = callback(element)
      arrayCopy.push(newItem)
    });
    return arrayCopy;
  }

  console.log(myMap(reverseee, myArray))

  //3a
  var numbers = [1,3,5,10,11];

  let result = numbers.map((a,b) => {
    if(typeof numbers[b+1] === "number") { return a + numbers[b+1] }
    else { return a }
  })

  console.log(result)

  //3b
  let aHREF = myArray.map((name) => {
    return `
    <a href=\"\">${name}</a>
    `
  }).join("");

  console.log("<nav>" + "\n" + aHREF + "\n" + "</nav>");

  //3c
  var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
  
  let vals = persons.map((person) =>{ 
    return `
    <tr>

            <td>${person.name}</td>
            <td>${person.phone}</td>

    </tr>
            `
  }).join("");
 
  var tablee = (`<table>
  <tr>
    <th>Name</th>
    <th>Phone</th>
    
  </tr>
  ${vals}
  </table>`);

  console.log(tablee)


  //4a
  var all= ["Hassan", "Peter", "Carla", "Boline"];

  let newAll = all.join("#")

  console.log(newAll)

  //4b
  var numberrs = [2, 3, 67, 33];

  let newNumberrs = numberrs.reduce((total, num) =>{ 
    return total + num});

  console.log(newNumberrs)

  //4c
  var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]
   
    const sum = members.reduce((a, b, c, d ) => a + b.age, 0);
    const avg = (sum / newMembers.length);

    console.log(`The sum is: ${sum}. The average is: ${avg}.`);

  


