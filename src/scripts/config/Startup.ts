import {initConfig} from './Config';

import * as LayoutBuilder from '../engine/LayoutBuilder';

export async function startup() {
    await initConfig();

    await LayoutBuilder.initLayout();
}