const LAYOUT_TEMPLATE = require('../../../views/layout.html');

export async function initLayout() {
    $('body')
        .empty()
        .append(LAYOUT_TEMPLATE);
}