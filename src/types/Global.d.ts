declare let __webpack_public_path__: string;

// Vue files fix
declare module '*.vue' {
    import Vue from 'vue';
    export default typeof Vue;
}