const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //Check if a file is requested
  if (req.url === '/') {
    //Logic to handle file request
    const filePath = './largeFile.txt';
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error reading file');
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': data.length
      });

      res.end(data);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('File not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Create a dummy large file
fs.writeFileSync('./largeFile.txt', ' '.repeat(1024 * 1024 * 10));// 10MB file