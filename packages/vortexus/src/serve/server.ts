import express from 'express';
import path from 'path';
let app = express();

export const servePages = (map: object) => {
    if (map['index'] != undefined) {
        app.get('/', (req, res) => {
            res.send(map['index'].render());
        })
    }

    for (let page in map) {
        app.get('/' + page, (req, res) => {
            res.send(map[page].render());
        })
    }

    app.listen(8080, "127.0.0.1", () => {
        console.log("Server started!");
        console.log("http://127.0.0.1:8080/");
    });
}

export const servePageStatic = (dir: string) => {
    app.use(express.static(dir));

    app.get('*', (req, res, next) => {
        if (path.extname(req.path).length > 0) {
            next();
        } else {
            req.url += '.html';
            express.static(dir)(req, res, next);
        }
    });

    app.listen(8080, "127.0.0.1", () => {
        console.log("Server started!");
        console.log("http://127.0.0.1:8080/");
    })
}