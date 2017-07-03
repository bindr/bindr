import superagent = require('superagent');
import {ManifestEntry} from '../models/Manifest';

export const MANIFEST_FILE = 'manifest.json';

let manifest: ManifestEntry;

async function initManifest() {
    try {
        const manifestResponse = await superagent.get(MANIFEST_FILE);

        if (manifestResponse.body) {
            manifest = manifestResponse.body;
        }
    }
    catch (err) {
    }
}

export async function getManifest(): Promise<ManifestEntry> {
    if (!manifest) {
        await initManifest();
    }

    return manifest;
}
