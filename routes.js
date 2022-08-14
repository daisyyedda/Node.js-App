const fs = require('fs');

const requestHanlder = (req, res) => {
  const url = req.url;
  const method = req.method;
  // === means url is both a string and has the value '/'
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); 
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    // allows us to listen to certain events
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk); // changing the actual body object
    }); 

    // an event listener
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        // another event listener
        // this code would not get blocked
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  // sending a response with some html tags
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end(); // must not write anymore after end
};

module.exports = {
  handler: requestHanlder,
  someText: 'Some hard coded text'
};

/* the following code snippet is equivalent to the above
module.exports.handler = requestHanlder;
module.exports.someText = 'Some hard coded text';
*/
