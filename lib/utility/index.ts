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

export const BULLET_CHARACTER = "•";

export const abbreviateNumber = (number: number) => {
  const options = {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  };

  return Intl.NumberFormat("en", options).format(number);
};

export const equalBy = <T>(keyFn: (x: T) => string | number, x1: T, x2: T) =>
  keyFn(x1) === keyFn(x2);

export const toBase64 = (data: string) => {
  return Buffer.from(data).toString("base64");
};
