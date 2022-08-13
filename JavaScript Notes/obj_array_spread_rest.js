// create an object person
const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();

// copy the object person
const copiedPerson = {...person};
console.log(copiedPerson);

// arrays in js
const hobbies = ['Sports', 'Cooking'];
// looping through the array elements
for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// add a new element to the end of the array
hobbies.push('Programming');
console.log(hobbies);

// copy the array using slice
const copiedArray = hobbies.slice();
console.log(copiedArray);

// create a nested array
const newArray = [hobbies];
console.log(newArray);

// copy the array using the spread operator
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

// use rest operator to take all arguments provided
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

/*
both operators are represented using three dots
spread operator: pull elements/properties out of arrays/objects
rest operator: merge multiple arguments into an array, using in the 
argument list of a function
*/