import { writeFile, existsSync, mkdirSync } from 'fs';
import { format } from './../utils/format';

export const buildPage = (page: string, filename: string) => {
    let dir = 'build';

    if (!existsSync(dir)){
        mkdirSync(dir);
    }

    if (!filename.endsWith('.html')) {
        filename += '.html';
    }

    let path = dir + "/" + filename;
    console.log(path);
    writeFile(path, format(page), { flag: 'w+' }, function (err) {
        if (err) throw err;
        console.log(filename + ' built!');
    });
}

export const buildPages = (map: object) => {
    for (let page in map) {
        buildPage(map[page], page);
    }
}