import fs from 'fs';
import path from 'path';

type ElementProps = {
    children?: string[];
    content?: string;
    [key: string]: any;
}

export function createElement<T extends ElementProps>(tag: string) {
    return function (props: T): string {
        const { children, content, ...attributes } = props;

        const attributeStrings = Object.entries(attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        const innerContent = content || "";

        return (
            `<${tag} ${attributeStrings}>
                ${innerContent} ${children?.length > 0 ? "\n" + children.join("\n") : ""}
            </${tag}>`
        );
    }
}

export function createSelfClosingElement<T>(tag: string) {
    return function (props: T): string {
        const { ...attributes } = props;

        const attributeStrings = Object.entries(attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        return (
            `<${tag} ${attributeStrings} />`
        )
    }
}

export function createImportingElement<T extends { filePath: string }>(tag: string) {
    return function (props: T): string {
        const { filePath, ...attributes } = props;

        const attributeStrings = Object.entries(attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        let content = fs.readFileSync(path.resolve(filePath), 'utf8');

        return (
            `<${tag} ${attributeStrings}>
                ${content}
            </${tag}>`
        )
    }
}