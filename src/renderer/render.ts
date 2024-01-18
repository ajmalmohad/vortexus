import { writeFile, existsSync, mkdirSync } from 'fs';

export const renderPage = (page: string, filename: string) => {
    let dir = 'build';

    if (!existsSync(dir)){
        mkdirSync(dir);
    }

    let path = dir + "/" + filename;
    console.log(path);
    writeFile(path, page, { flag: 'w+' }, function (err) {
        if (err) throw err;
        console.log(filename + ' built!');
    });
}