import { render } from 'vortexus';
import about from './src/about/about.js';
import index from './src/index/index.js';

let pages = {
    about: about,
    index: index
}

render(pages, 'ssg');