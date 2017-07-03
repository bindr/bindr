import {getManifest} from '../../config/Manifest';

const NAVIGATION_TEMPLATE = require('../../../views/partials/nav.html');

const NAV_SELECTOR = 'bindr-nav';

const GROUP_SELECTOR = '.list-group';
const ITEM_SELECTOR = '.list-group-item';
const TITLE_SELECTOR = '.list-group-item-title';

export async function initNavigation() {
    const templates = getNavTemplateParts();

    const manifest = await getManifest();

    fixIndents();
}

function getNavTemplateParts(): { group: JQuery, item: JQuery, title: JQuery } {
    const navigationTemplate = $(NAVIGATION_TEMPLATE).filter('template');

    return {
        group: navigationTemplate.filter('#group').contents(),
        item: navigationTemplate.filter('#item').contents(),
        title: navigationTemplate.filter('#title').contents()
    };
}

// TODO: Find a better way to do this please
function fixIndents() {
    $(`${NAV_SELECTOR} .list-group-item-title`)
        .css('padding-left', function () {
            return ($(this).parents().filter('.list-group').length * 15) + 'px';
        });
}