import superagent = require('superagent');

export const CONFIG_FILE = 'bindr.json';

class Config {
}

let currentConfig = {};

export async function initConfig() {
    const config = new Config();

    try {
        const configResponse = await superagent.get(CONFIG_FILE);

        if (configResponse.body) {
            Object.assign(config, configResponse.body);
        }
    }
    catch (err) {
    }

    currentConfig = config;
}

export const getCurrentConfig = () => currentConfig;
