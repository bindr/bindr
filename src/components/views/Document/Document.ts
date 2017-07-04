import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import superagent from 'superagent';

import {parseMarkdown} from '../../../scripts/engine/MarkdownParser';
import {getDocFilePath} from '../../../scripts/helpers/PathsHelper';

@Component
export default class extends Vue {
    documentHtml: string;

    async beforeRouteUpdate() {
        this.documentHtml = await getDocumentHtml(this.$route.path);
    }
}

async function getDocumentHtml(path: string) {
    const filePath = await getDocFilePath(path);

    // TODO: Handle filePath undefined

    const response = await superagent.get(filePath);

    // TODO: Handle 404 NOT FOUND

    const markdownText = response.text;
    const htmlText = parseMarkdown(markdownText);

    return htmlText;
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