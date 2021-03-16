export * from "./date";
export * from "./minimum";
export * from "./edit-distance";

export const getWindowCssHeight = () => {
  if (process.browser) {
    return window.innerHeight;
  } else {
    return "100vh";
  }
};
