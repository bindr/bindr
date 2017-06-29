import superagent = require('superagent');

class Config {
}

export async function initConfig() {
    const config = new Config();

    try {
        const configResponse = await superagent.get('./bindr.json');

        if (configResponse.body) {
            Object.assign(config, configResponse.body);
        }
    }
    catch (err) {
    }

    // Configuration = config;
}