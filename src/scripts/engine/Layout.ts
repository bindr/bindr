import Vue from 'vue';
import App from '../../components/App.vue';

const VUE_ENTRY = 'vue-entry';

export async function initLayout(): Promise<void> {
    await prepareBody();

    await initVue();
}

/* Prepare your body ;) */
async function prepareBody(): Promise<void> {
    await new Promise(resolve => {
        $(document).ready(() => {
            $(document.body)
                .empty()
                .append(`<${VUE_ENTRY}>`);

            resolve();
        });
    });
}

async function initVue(): Promise<void> {
    new Vue({
        el: VUE_ENTRY,
        render: h => h(App)
    });
}