import superagent from 'superagent';

import {ManifestEntry} from '../models/Manifest';
import {getCurrentConfig} from './Config';

let manifest: ManifestEntry;

export async function loadManifest() {
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
        await loadManifest();
    }

    return manifest;
}
