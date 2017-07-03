import {getManifest} from '../../config/Manifest';
import {ManifestEntry, ManifestEntryType} from '../../models/Manifest';

const NAVIGATION_TEMPLATE = require('../../../views/partials/nav.html');

const NAV_SELECTOR = 'bindr-nav';

const GROUP_SELECTOR = '.list-group';
const ITEM_SELECTOR = '.list-group-item';
const TITLE_SELECTOR = '.list-group-item-title';

export async function initNavigation() {
    const navMenu = await buildNavigation();

    $(NAV_SELECTOR)
        .empty()
        .append(navMenu);

    fixIndents();
}

async function buildNavigation(): Promise<string> {
    const templates = getNavTemplateParts();
    const manifest = await getManifest();

    function recurseOverEntries(manEntry: ManifestEntry): JQuery {
        const listItem = templates.item.clone();
        const listTitle = templates.title.clone();
        listTitle.text(manEntry.title);

        listItem.append(listTitle);
        listItem.addClass(`list-${manEntry.type}`);

        if (manEntry.type === ManifestEntryType.Section) {
            const listGroup = templates.group.clone();

            if (manEntry.children && manEntry.children.length) {
                for (let child of manEntry.children) {
                    listGroup.append(recurseOverEntries(child));
                }
            }

            listItem.append(listGroup);
        }

        return listItem;
    }

    const fullNavTree = recurseOverEntries(manifest);

    return fullNavTree
        .contents()
        .filter('.list-group')
        .get(0)
        .outerHTML;
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