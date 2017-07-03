import superagent = require('superagent');

let currentConfig: IConfigOptions;

export async function initConfig() {
    currentConfig = {
        config: 'bindr.json',
        manifest: 'manifest.json',
        docs: './docs/',
        theme: 'cosmo'
    };

    try {
        const configResponse = await superagent.get(currentConfig.config);

        if (configResponse.body) {
            currentConfig = Object.assign(currentConfig, configResponse.body);
        }
    }
    catch (err) {
    }
}

export async function getCurrentConfig(): Promise<IConfigOptions> {
    if (!currentConfig) {
        await initConfig();
    }

    return currentConfig;
}
