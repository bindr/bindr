const VIEW_SELECTOR = 'bindr-view';

export function updateView(html: string) {
    $(VIEW_SELECTOR).html(html);
}