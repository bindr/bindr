import {initConfig} from './Config';
import {initRouter} from '../engine/RouteResolver';
import {initView} from '../engine/ViewEngine';

export async function startup() {
    await initConfig();

    await initRouter();

    await initView();
}