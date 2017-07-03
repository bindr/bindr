import Vue from 'vue';
import VueRouter from 'vue-router';

import {initLayout} from './scripts/engine/Layout';
import {initRouter} from './scripts/engine/Routing';

export default async function startup() {

    Vue.use(VueRouter);

    await initLayout();

    // await initRouter();
}