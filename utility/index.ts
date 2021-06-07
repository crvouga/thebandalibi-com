import * as R from "remeda";

export * from "./id";
export * from "./string";
export * from "./matrix";
export * from "./date";
export * from "./edit-distance";

export const minBy = <T>(f: (x: T) => number, a: T, b: T): T =>
  f(a) < f(b) ? a : b;

export const minimumBy = <T>(f: (x: T) => number, [x, ...xs]: T[]): T =>
  xs.reduce((min, x) => minBy(f, min, x), x);

export const toMin = (xs: number[]) =>
  xs.reduce((minimum, x) => Math.min(minimum, x), Infinity);

export const toMax = (xs: number[]) =>
  xs.reduce((maximum, x) => Math.max(maximum, x), -Infinity);

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

export const equalBy = <T>(keyFn: (x: T) => string | number, x1: T, x2: T) => {
  return keyFn(x1) === keyFn(x2);
};

export const toBase64 = (data: string) => {
  return Buffer.from(data).toString("base64");
};

export const clamp = (
  lowerBound: number,
  upperBound: number,
  value: number
) => {
  return Math.min(Math.max(value, lowerBound), upperBound);
};

export const unique = <T>(xs: T[]) => {
  return Array.from(new Set<T>(xs));
};

export const add = (a: number, b: number) => {
  return a + b;
};

export const sum = (xs: number[]) => {
  return xs.reduce(add, 0);
};

export const average = (xs: number[]) => {
  return sum(xs) / xs.length;
};

export const composeRight = R.pipe;
export const takeWhile = R.takeWhile;
