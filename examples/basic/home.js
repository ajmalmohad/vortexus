import { Div, A, Button, H1 } from 'vortexus';

export const home = Div({
    class: 'test',
    style: "color: red;",
    content: "Hello World!",
    children: [
        Div({
            class: 'test',
            style: "color: red;",
            content: "First Child!",
            children: [
                Div({
                    content: "Second Child!"
                })
            ]
        }),
        A({
            href: 'https://google.com',
            content: 'Google'
        }),
        Button({
            content: 'Click Me!'
        }),
        H1({
            content: 'Hello World!'
        })
    ]
});