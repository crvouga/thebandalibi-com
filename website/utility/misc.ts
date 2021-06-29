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

export const uniqueBy = <T>(toKey: (item: T) => string, items: T[]): T[] => {
  return Object.values(
    items.reduce(
      (itemMap, item) => ({
        ...itemMap,
        [toKey(item)]: item,
      }),
      {}
    )
  );
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

export const takeWhile = <T>(pred: (x: T) => boolean, xs: T[]) => {
  const ys: T[] = [];
  for (const x of xs) {
    if (!pred(x)) {
      return ys;
    }
    ys.push(x);
  }
  return ys;
};

export const range = (start: number, end: number) => {
  if (start > end) {
    throw new Error("invalid range");
  }

  const ys: number[] = [];

  for (let i = start; i < end; i++) {
    ys.push(i);
  }

  return ys;
};
