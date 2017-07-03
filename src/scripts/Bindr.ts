import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routing/Routes';

export async function initBindr(): Promise<void> {
    await prepareBody();

    await initVue();
}

/* Prepare your body ;) */
async function prepareBody(): Promise<void> {
    await new Promise(resolve => {
        $(document).ready(() => {
            $(document.body)
                .empty()
                .append(`<div id="vue-entry"><router-view></router-view></div>`);

            resolve();
        });
    });
}

async function initVue(): Promise<void> {
    const router = new VueRouter({routes});

    new Vue({router})
        .$mount(`#vue-entry`);
}