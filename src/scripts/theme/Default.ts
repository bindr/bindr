import Vue from 'vue';

export async function initThemes() {
    (Vue as any).material.registerTheme('default', {
        primary: {
            color: 'blue-grey',
            hue: 900
        },
        accent: {
            color: 'teal',
            hue: 900
        },
        background: 'grey'
    });
}