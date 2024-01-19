import { render } from 'vortexus';
import { home } from './src/home/home.js';
import { index } from './src/index/index.js';

let pages = {
    home: home,
    index: index
}

render(pages, 'ssg');