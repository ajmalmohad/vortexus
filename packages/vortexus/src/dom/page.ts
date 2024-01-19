import fs from 'fs';
import path from 'path';

export class Page {
    head: string;
    body: string;
    scripts: string[];
    stylesheets: string[];

    constructor() {
        this.head = null;
        this.body = null;
        this.scripts = [];
        this.stylesheets = [];
    }

    addScriptFile(filePath: string): void {
        let content = fs.readFileSync(path.resolve(filePath), 'utf8');
        this.scripts.push(content);
    }

    addStylesheetFile(filePath: string): void {
        let content = fs.readFileSync(path.resolve(filePath), 'utf8');
        this.stylesheets.push(content);
    }

    addScript(script: string): void {
        this.scripts.push(script);
    }

    addStylesheet(stylesheet: string): void {
        this.stylesheets.push(stylesheet);
    }

    render(): string {
        let scripts = this.scripts.join('\n');
        let stylesheets = this.stylesheets.join('\n');

        return (
            `<html>
                <head>
                    ${this.head}
                    <style>
                        ${stylesheets}
                    </style>
                </head>
                <body>
                    ${this.body}
                    <script>
                        ${scripts}
                    </script>
                </body>
            </html>`
        )
    }
}