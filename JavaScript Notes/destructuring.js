const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// destructuring object
const printName = ({ name }) => {
  console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

// destructuring array
const hobbies = ['Sports', 'Cooking'];
// elements are being pulled out by position
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);