import fs from 'fs';
import path from 'path';
import { format } from '../utils/format';
import { Script, Style } from './domTags';

export class Page {
    head: any;
    body: any;
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

    parseNested(obj: any, depth: number): string {
        let result = '';
        let type = obj.type

        const attributeStrings = Object.entries(obj.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        switch (type) {
            case 'self':
                result += `<${obj.tag} ${attributeStrings} />\n`;
                break;
            case 'normal':
                result += `<${obj.tag} ${attributeStrings}>\n`;

                if (obj.content) {
                    result += `${obj.content}\n`;
                }

                if (obj.children) {
                    for (let child of obj.children) {
                        result += this.parseNested(child, depth + 1)
                    }
                }

                result += `</${obj.tag}>\n`;
                break;
            default:
                break;
        }

        return result;
    }

    render(): string {
        let scripts = this.scripts.join('\n');
        let stylesheets = this.stylesheets.join('\n');
        stylesheets && this.head.children.push(
            Style({
                content: stylesheets
            })
        )
        scripts && this.body.children.push(
            Script({
                content: scripts
            })
        )

        let head = this.parseNested(this.head, 0)
        let body = this.parseNested(this.body, 0)

        return (
            format(
                `<html>
                    ${head}
                    ${body}
                </html>`
            )
        )
    }
}