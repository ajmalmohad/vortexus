import express from 'express';
let app = express();

export const servePages = (map: object) => {
    if(map['index'] != undefined) {
        app.get('/', (req, res) => {
            res.send(map['index'], { 'Content-Type': 'text/html' });
        })
    }else if(map['index.html'] != undefined) {
        app.get('/', (req, res) => {
            res.send(map['index.html'], { 'Content-Type': 'text/html' });
        })
    }

    for (let page in map) {
        app.get('/' + page, (req, res) => {
            res.send(map[page], { 'Content-Type': 'text/html' });
        })
    }

    app.listen(8080, "127.0.0.1", () => {
        console.log("Server started!");
        console.log("http://127.0.0.1:8080/");
        
    });
}