type ElementProps = {
    children?: string[];
    content?: string;
    [key: string]: any;
}

export function createElement<T extends ElementProps>(tag: string) {
    return function (props: T) {
        const { children, content, ...attributes } = props;

        return ({
            tag,
            type:'normal',
            attributes,
            children,
            content,
        });
    }
}

export function createSelfClosingElement<T>(tag: string) {
    return function (props: T) {
        const { ...attributes } = props;

        return ({
            tag,
            attributes,
            type: 'self'
        })
    }
}