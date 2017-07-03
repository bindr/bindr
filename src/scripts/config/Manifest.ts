import superagent = require('superagent');
import {ManifestEntry} from '../models/Manifest';
import {getCurrentConfig} from './Config';

export const MANIFEST_FILE = 'manifest.json';

let manifest: ManifestEntry;

async function initManifest() {
    const config = await getCurrentConfig();

    try {
        const manifestResponse = await superagent.get(config.manifest);

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
