const http = require('http');

const server = http.createServer((req, res) => { // anonymous function
  console.log(req);
  // process.exit();
});

server.listen(3000);