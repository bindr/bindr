import superagent from 'superagent';

import {parseMarkdown} from '../engine/MarkdownParser';

async function onRouteResolve(path: string) {
    path = processPath(path);

    const response = await superagent.get(path);

    const markdownText = response.text;
    const htmlText = parseMarkdown(markdownText);
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