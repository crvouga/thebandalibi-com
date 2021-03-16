export const HIDE_SCROLL_BAR_STYLES = {
  //source: https://stackoverflow.com/questions/43186015/css-hide-scroll-bar-but-have-element-scrollable

  "-ms-overflow-style": "none" /* IE and Edge */,

  "scrollbar-width": "none" /* Firefox */,

  "& ::-webkit-scrollbar": {
    display: "none",
  },
};

export const DISABLE_ZOOM_STYLES = {
  "-ms-touch-action": "manipulation",
  "touch-action": "manipulation",
};
