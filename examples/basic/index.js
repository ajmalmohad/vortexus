import { home } from './home.js';

import { HTML, Head, Title, Meta, Link, Body } from 'vortexus';
import { renderPage } from 'vortexus';

const head = Head({
    children: [
        Title({
            content: 'Vortexus'
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