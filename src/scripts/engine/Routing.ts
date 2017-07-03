import superagent from 'superagent';

import {parseMarkdown} from './MarkdownParser';

import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {Component} from 'vue-router/types/router';

export async function initRouter(rootComponent: Component) {
    const routes: RouteConfig[] = [
        {path: '/', component: rootComponent}
    ];

    const router = new VueRouter({routes});

    const app = new Vue({router}).$mount('#router-container');
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