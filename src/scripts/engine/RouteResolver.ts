import superagent = require('superagent');

import {parseMarkdown} from './MarkdownParser';
import {updateView} from './ViewEngine';

export async function initRouter() {
    const router = new Router({});

    setupRouteResolver(router);

    router.init();
}

function setupRouteResolver(router: any) {
    router.configure({});

    router.on('docs/(.*)',
        (path: string) => {
            onRouteResolve(path);
        }
    );
}

async function onRouteResolve(path: string) {
    path = processPath(path);

    const response = await superagent.get(path);

    const markdownText = response.text;
    const htmlText = parseMarkdown(markdownText);

    updateView(htmlText);
}

function processPath(path: string): string {
    // Look under 'docs' by default
    path = `./docs/${path}`;

    // If path ends with '/', check for index file
    if (path.endsWith('/')) {
        path += 'index';
    }

    // Understand missing extension
    if (!path.endsWith('.md')) {
        path += '.md';
    }

    return path;
}