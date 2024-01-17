type ElementProps = {
    children?: string[];
    content?: string;
    [key: string]: any;
}

export function createElement<T extends ElementProps>(tag: string) {
    return function(props: T): string {
        const { children, content, ...attributes } = props;

        const attributeStrings = Object.entries(attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        const innerContent = content || "";

        return (
`<${tag} ${attributeStrings}>
${innerContent} ${children ? "\n" + children.join("\n") : ""}
</${tag}>`
        );
    }
}