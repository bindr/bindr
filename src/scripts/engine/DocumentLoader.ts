import superagent from 'superagent';

import {getDocFilePath} from '../helpers/PathsHelper';
import {parseMarkdown} from './MarkdownParser';

export async function getDocumentHtml(path: string) {
    const filePath = await getDocFilePath(path);

    // TODO: Handle filePath undefined

    const response = await superagent.get(filePath);

    // TODO: Handle 404 NOT FOUND

    const markdownText = response.text;
    const htmlText = parseMarkdown(markdownText);

    return htmlText;
}