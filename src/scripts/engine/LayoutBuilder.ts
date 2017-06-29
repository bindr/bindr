const layoutTemplate = require('../../views/index.html');

export async function initLayout() {
    $('body')
        .empty()
        .append(layoutTemplate);
}