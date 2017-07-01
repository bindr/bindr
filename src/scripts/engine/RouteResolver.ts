import superagent = require('superagent');

import {parseMarkdown} from './MarkdownParser';
import {updateView} from './ViewUpdater';

export async function initRouter() {
    const router = new Router({});

    setupRouteResolver(router);

    router.init();
}

function setupRouteResolver(router: any) {
    router.on('docs/(.*)',
        (path: string) => {
            onRouteResolve(path);
        }
    );
}

async function onRouteResolve(path: string) {
    path = `./docs/${path}`;

    const response = await superagent.get(path);

    const markdownText = response.text;
    const htmlText = parseMarkdown(markdownText);

    updateView(htmlText);
}