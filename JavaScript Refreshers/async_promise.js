const fetchData = () => {
  // calls the built-in Promise constructor
  // resolve and reject are just random names
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

// 2000 is in milliseconds =  2 seconds
// this is asynchronous code
// callback function
setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

// these two are synchronous code as they are executed immediately
console.log('Hello!');
console.log('Hi');
