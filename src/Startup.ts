import './scripts/hooks/ComponentHooks';

import Vue from 'vue';
import VueRouter from 'vue-router';

import {initBindr} from './scripts/Bindr';
import {loadConfig} from './scripts/config/Config';
import {loadManifest} from './scripts/config/Manifest';

export default async function startup() {

    // Bootstrap Vue Modules
    Vue.use(VueRouter);

    // Load Bindr related configs
    await Promise.all([
        loadConfig(),
        loadManifest()
    ]);

    // Initialize Bindr
    await initBindr();
}