#! /usr/bin/env node

import { createServer } from 'http';
import * as path from 'path';
import { createServer as createViteServer } from 'vite';

let vite;

const server = createServer(async (request, response) => {
    if (vite) {
        return vite.middlewares(request, response);
    }
});

export const startServer = (port) => {
    server.listen(port);
    console.log('Server running at http://127.0.0.1:' + port + '/');
}

const [task] = process.argv.slice(2);

switch (task) {
  case "dev": {
    createViteServer({ 
        server: { middlewareMode: 'html' },
        root: path.resolve('build')
    }).then(server => {
        vite = server;
        startServer(3000);
    });
    break;
  }
  case "build": {
    console.log("build");
    break;
  }
  default:
    console.log(`Unknown script "${task}".`);
}