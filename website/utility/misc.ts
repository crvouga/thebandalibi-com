export const getWindowCssHeight = () => {
  if (process.browser) {
    return window.innerHeight;
  } else {
    return "100vh";
  }
};

export const toBase64 = (data: string) => {
  return Buffer.from(data).toString("base64");
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
