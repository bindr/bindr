import Vue from 'vue';
import VueRouter from 'vue-router';

import {initBindr} from './scripts/Bindr';

export default async function startup() {

    Vue.use(VueRouter);

    await initBindr();
}