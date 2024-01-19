import { writeFile, existsSync, mkdirSync } from 'fs';

export const buildPage = (page: any, filename: string) => {
    let dir = 'build';

    if (!existsSync(dir)){
        mkdirSync(dir);
    }

    if (!filename.endsWith('.html')) {
        filename += '.html';
    }

    let path = dir + "/" + filename;
    console.log(path);
    writeFile(path, page.render(), { flag: 'w+' }, function (err) {
        if (err) throw err;
        console.log(filename + ' built!');
    });
}

export const buildPages = (map: object) => {
    for (let page in map) {
        buildPage(map[page], page);
    }
}