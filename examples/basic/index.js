import { render } from 'vortexus';
import home from './src/home/home.js';
import index from './src/index/index.js';

let pages = {
    home: home.render(),
    index: index.render()
}

render(pages, 'ssg');