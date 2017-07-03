import 'marked';
const jquery = require('jquery/dist/jquery.slim');

(window as any).$ = (window as any).jQuery = jquery;

const {Router} = require('director/build/director.js');
(window as any).Router = Router;