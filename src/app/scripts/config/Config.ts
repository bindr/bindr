import superagent = require('superagent');
const appConfig = require('../../../config.json') as IAppConfig;

class Config {
}

let currentConfig = {};

export async function initConfig() {
    const config = new Config();

    try {
        const configResponse = await superagent.get(appConfig.configFile);

        if (configResponse.body) {
            Object.assign(config, configResponse.body);
        }
    }
    catch (err) {
    }

    currentConfig = config;
}

export const getCurrentConfig = () => currentConfig;
