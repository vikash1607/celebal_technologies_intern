const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const filePath = path.join(__dirname, url.pathname);

  if (url.pathname === '/create' && req.method === 'POST') {
    const fileName = url.searchParams.get('file');
    if (!fileName) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('File name is required');
      return;
    }

    const fileContent = 'This is a new file.';
    fs.writeFile(path.join(__dirname, fileName), fileContent, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error creating file');
      } else {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('File created successfully');
      }
    });
  } else if (url.pathname === '/read' && req.method === 'GET') {
    const fileName = url.searchParams.get('file');
    if (!fileName) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('File name is required');
      return;
    }

    fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else if (url.pathname === '/delete' && req.method === 'DELETE') {
    const fileName = url.searchParams.get('file');
    if (!fileName) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('File name is required');
      return;
    }

    fs.unlink(path.join(__dirname, fileName), (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File deleted successfully');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid request');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
