export const takeCycle = <T>(xs: T[], count: number) => {
  const ys: T[] = [];

  for (let index = 0; index < count; index++) {
    const x = xs[index % xs.length];
    ys.push(x);
  }

  return ys;
};
