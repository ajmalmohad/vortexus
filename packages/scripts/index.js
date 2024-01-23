#! /usr/bin/env node
import handler from 'serve-handler';
import http from 'http';
import { spawn } from 'child_process';
import path from 'path';

const server = http.createServer((request, response) => {
  return handler(request, response, {
    "public": "build"
  });
});

const [task] = process.argv.slice(2);

switch (task) {
  case "start": {
    const nodemonPath = path.join('node_modules', 'vortexus-scripts', 'node_modules', '.bin', 'nodemon');
    const child = spawn(nodemonPath, ['index.js']);

    child.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    child.on('error', (error) => {
      console.error(`spawn error: ${error}`);
    });
    break;
  }
  case "serve": {
    server.listen(5000, () => {
      console.log('Running at http://localhost:5000');
    });
    break;
  }
  default:
    console.log(`Unknown script "${task}".`);
}