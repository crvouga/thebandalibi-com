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

export const descend = <T>(keyFn: (x: T) => number) => (x1: T, x2: T) =>
  keyFn(x2) - keyFn(x1);
