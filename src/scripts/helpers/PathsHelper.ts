import {getManifest} from '../config/Manifest';
import {Document, ManifestEntry, ManifestEntryType, Section} from '../models/Manifest';

type DocsUrlMap = { [key: string]: string };

let docsUrlMap: DocsUrlMap;

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

export async function getDocFilePath(urlPath: string): Promise<string> {
    if (!docsUrlMap) {
        await buildUrlMap();
    }

    console.log(docsUrlMap);

    return docsUrlMap[urlPath];
}