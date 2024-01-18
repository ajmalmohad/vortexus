#! /usr/bin/env node
import handler from 'serve-handler';
import http from 'http';
const server = http.createServer((request, response) => {
  return handler(request, response, {
    "public": "build"
  });
});

const [task] = process.argv.slice(2);

switch (task) {
  case "dev": {
    server.listen(3000, () => {
      console.log('Running at http://localhost:3000');
    });
    break;
  }
  case "start": {
    server.listen(5000, () => {
      console.log('Running at http://localhost:5000');
    });
    break;
  }
  default:
    console.log(`Unknown script "${task}".`);
}