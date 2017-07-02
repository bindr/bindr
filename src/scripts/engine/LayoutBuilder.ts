const layoutTemplate = require('../../views/layout.html');

export async function initLayout() {
    $('body')
        .empty()
        .append(layoutTemplate);
}