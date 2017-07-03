import marked from 'marked';

export function parseMarkdown(markdownText: string) {
    return marked(markdownText);
}