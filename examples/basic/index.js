import { home } from './home.js';

import { HTML, Head, Title, Meta, Link, Body, StyleFile, ScriptFile } from 'vortexus';
import { render } from 'vortexus';

const head = Head({
    children: [
        Title({
            content: 'Vortexus'
        }),
        Meta({
            name: 'viewport',
            width: 'device-width',
            'initial-scale': '1.0'
        }),
        Link({
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        }),
        StyleFile({
            filePath: './style.css'
        })
    ]
});

const page = HTML({
    children: [
        head,
        Body({
            children: [
                home,
                ScriptFile({
                    filePath: './script.js'
                })
            ]
        })
    ]
})

let pages = {
    'index': page,
    'home': page,
}

render(pages, 'ssr')