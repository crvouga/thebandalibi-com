export const transpose = <T>(a: T[][]): T[][] => {
  return a[0].map((_, c) => a.map((r) => r[c]));
};
