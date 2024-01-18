import { servePages, servePageStatic } from './server'
import { buildPages } from './builder'

type RenderOption = 'ssr' | 'ssg'

export function render(pages: object, option: RenderOption) {
    if (option === 'ssr') {
        servePages(pages)
    }else if (option === 'ssg') {
        buildPages(pages)
        servePageStatic('build')
    }
}
