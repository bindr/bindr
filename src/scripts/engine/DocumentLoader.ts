import superagent from 'superagent';

import {Document, ManifestEntry, ManifestEntryType, Section} from '../models/Manifest';
import {getManifest} from '../config/Manifest';
import {parseMarkdown} from './MarkdownParser';

export async function getDocumentHtml(path: string): Promise<string> {
    path = decodeURIComponent(path);

    try {
        const filePath = await getDocFilePath(path);

        // TODO: Handle filePath undefined

        const response = await superagent.get(filePath);

        // TODO: Handle 404 NOT FOUND

        const markdownText = response.text;
        const htmlText = parseMarkdown(markdownText);

        return htmlText;
    }
    catch (err) {
        return '';
    }
}

let docsUrlMap: { [key: string]: string };

type DocsUrlMap = typeof docsUrlMap;

async function getDocFilePath(urlPath: string): Promise<string> {
    if (!docsUrlMap) {
        await buildUrlMap();
    }

    // Remove leading slash
    urlPath = urlPath.substring(1);

    return docsUrlMap[urlPath];
}

async function buildUrlMap() {
    const manifest = await getManifest();
    docsUrlMap = recurseOverManifest(manifest);
}

function recurseOverManifest(entry: ManifestEntry): DocsUrlMap {
    const files: DocsUrlMap = {};

    if (entry.type === ManifestEntryType.Document) {
        let doc = entry as Document;
        files[doc.url] = doc.filePath;
    }
    else if (entry.type === ManifestEntryType.Section) {
        let section = entry as Section;
        for (let child of section.children) {
            let childrenFiles = recurseOverManifest(child);
            Object.assign(files, childrenFiles);
        }
    }

    return files;
}