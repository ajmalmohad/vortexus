import { format } from "../utils/format";

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
            format(
                `<${tag} ${attributeStrings}>
                    ${innerContent} ${children?.length > 0 ? "\n" + children.join("\n") : ""}
                </${tag}>`
            )
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