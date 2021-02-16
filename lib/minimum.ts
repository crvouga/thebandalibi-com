export const minBy = <T>(f: (x: T) => number, a: T, b: T): T => {
  if (f(a) < f(b)) {
    return a;
  } else {
    return b;
  }
};

export const minimumBy = <T>(f: (x: T) => number, xs: T[]): T => {
  const [head, ...tail] = xs;

  return tail.reduce((min, x) => {
    return minBy(f, min, x);
  }, head);
};
