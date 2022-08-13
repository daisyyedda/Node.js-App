// we use let in lieu of var
const name = 'Max'; // string 
let age = 25; // number
const hasHobbies = true; // boolean

age = 30; // we use let st we can change age

// write a function
function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' + 
    userName + ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

// rewrite the prev function to an arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
  // the arrow provides the "this" keyword
  return (
    'Name is ' + 
    userName + ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' +
    userHasHobby
  );  
}

console.log(summarizeUser(name, age, hasHobbies)); // output the name

// shorter syntax for writing the arrow function
// if there is only one return statement, we can omit the curly braces
const add = (a, b) => a + b;
console.log(add(1, 2));
const addOne = a => a + 1; // a or (a) both works
console.log(addOne(1)); // returns 2
const addRandom = () => 1 + 2;
console.log(addRandom(48)); // always returns 3
