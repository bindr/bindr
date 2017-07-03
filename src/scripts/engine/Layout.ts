const LAYOUT_TEMPLATE = require('../../views/layout.html');

export async function initLayout() {
    await new Promise(resolve => {
        $(document).ready(() => {
            $(document.body)
                .empty()
                .append(LAYOUT_TEMPLATE);

            resolve();
        });
    });
}