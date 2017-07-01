import marked = require('marked');

export function parseMarkdown(markdownText: string) {
    return marked(markdownText);
}