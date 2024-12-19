const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle the request
  // ...

  // Sending the response without setting content length
  res.writeHead(200);
  res.end('Hello, world!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});