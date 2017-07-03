import superagent = require('superagent');

export const MANIFEST_FILE = 'manifest.json';

let manifest = {};

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

export async function getManifest() {
    if (!manifest) {
        await initManifest();
    }

    return manifest;
}
