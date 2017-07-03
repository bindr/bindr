const sanitizer = require('sanitize-html');

import {initLayout} from './layout/Layout';
import {initNavigation} from './layout/Navigation';

const VIEW_SELECTOR = 'bindr-view';

export async function initView() {
    await initLayout();

    await initNavigation();
}

export async function updateView(html: string) {
    const sanitizedHtml = sanitizer(html);

    $(VIEW_SELECTOR).html(sanitizedHtml);
}