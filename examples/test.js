const { Div, A } = require('../dist/lib/es5/index.js');

let ans = Div({
    class: 'test',
    style: "color: red;",
    content: "Hello World!",
    children: [
        Div({
            class: 'test',
            style: "color: red;",
            content: "First Child!",
        }),
        Div({
            class: 'test',
            style: "color: red;",
            content: "Second Child!",
        }),
        A({
            href: "https://www.google.com",
            target: "_blank",
            content: "Google"
        })
    ]
});

console.log(ans, ans);