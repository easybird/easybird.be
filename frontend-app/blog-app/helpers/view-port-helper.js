export const VIEWPORT = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
};

export function getViewPortCategory(width) {
    if (width <= 600) {
        return VIEWPORT.SMALL
    }
    else if (width <= 992) {
        return VIEWPORT.MEDIUM
    }
    else {
        return VIEWPORT.LARGE;
    }
}
