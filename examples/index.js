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
            'initial-scale': '1'
        }),
        Link({
            rel: 'stylesheet',
            href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        })
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