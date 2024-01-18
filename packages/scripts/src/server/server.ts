import { createServer } from 'http';
import * as fs from 'fs';
import * as path from 'path';

const server = createServer(function (request, response) {
    console.log('Requesting...');

    var filePath = './build' + request.url;
    console.log(filePath);
    
    if (filePath == './build/')
        filePath = './build/index.html';

    console.log(filePath);

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                response.writeHead(404);
                response.end('Sorry, file not found: ' + error.code + ' ..\n');
                response.end();
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

})

export const startServer = (port: number) => {
    server.listen(port);
    console.log('Server running at http://127.0.0.1:3000/');
}