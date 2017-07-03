import App from './components/App';

import {initLayout} from './scripts/engine/Layout';
import {initRouter} from './scripts/engine/Routing';
import Vue from 'vue';
import VueRouter from 'vue-router';

export default async function startup() {

    Vue.use(VueRouter);

    await initLayout();

    // await initRouter(App);
}