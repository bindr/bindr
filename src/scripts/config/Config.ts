import superagent = require('superagent');

class Config {
}

export async function initConfig() {
    const config = new Config();

    const configResponse = await superagent.get('./config.json');

    if (configResponse.body) {
        Object.assign(config, configResponse.body);
    }

    Configuration = config;
}