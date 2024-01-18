import { home } from './home.js';

import { HTML, Head, Title, Meta, Link, Body } from 'vortexus';
import { renderPage } from 'vortexus';

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
    ]
});

const page = HTML({
    children: [
        head,
        Body({
            children: [
                home
            ]
        })
    ]
})

renderPage(page, 'index.html')