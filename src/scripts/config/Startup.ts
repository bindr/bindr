import {initConfig} from './Config';

import {initLayout} from '../engine/LayoutBuilder';
import {initRouter} from '../engine/RouteResolver';

export async function startup() {
    await initConfig();

    await initRouter();

    await initLayout();
}