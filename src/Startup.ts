import './scripts/hooks/ComponentHooks';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import {initBindr} from './scripts/Bindr';
import {initThemes} from './scripts/theme/Default';
import {loadConfig} from './scripts/config/Config';
import {loadManifest} from './scripts/config/Manifest';

export default async function startup() {

    // Bootstrap Vue Modules
    Vue.use(VueRouter);
    Vue.use(VueMaterial);

    // Load Bindr related configs
    await Promise.all([
        loadConfig(),
        loadManifest()
    ]);

    // Init Themes
    await initThemes();

    // Initialize Bindr
    await initBindr();
}