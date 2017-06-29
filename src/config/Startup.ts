import superagent = require('superagent');

import {Config} from './Config';

function loadConfig() {
    superagent.get('./config.json', response => {
        if (response.body) {
            Config.init(response.body);
        }
    });
}

export function startup() {
    loadConfig();
}