export const minBy = <T>(f: (x: T) => number, a: T, b: T): T =>
  f(a) < f(b) ? a : b;

export const maxBy = <T>(f: (x: T) => number, a: T, b: T): T =>
  f(a) > f(b) ? a : b;

export const maximumBy = <T>(f: (x: T) => number, [x, ...xs]: T[]): T =>
  xs.reduce((min, x) => maxBy(f, min, x), x);

export const minimumBy = <T>(f: (x: T) => number, [x, ...xs]: T[]): T =>
  xs.reduce((min, x) => minBy(f, min, x), x);

export const toMin = (xs: number[]) =>
  xs.reduce((minimum, x) => Math.min(minimum, x), Infinity);

export const toMax = (xs: number[]) =>
  xs.reduce((maximum, x) => Math.max(maximum, x), -Infinity);

export const descend = <T>(keyFn: (x: T) => number) => (x1: T, x2: T) =>
  keyFn(x2) - keyFn(x1);

export const equalBy = <T>(keyFn: (x: T) => string | number, x1: T, x2: T) => {
  return keyFn(x1) === keyFn(x2);
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

export const unionBy = <T>(
  toKey: (item: T) => string,
  x1: T[],
  x2: T[]
): T[] => {
  return uniqueBy(toKey, [...x1, ...x2]);
};

export const differenceBy = <T>(
  toKey: (item: T) => string,
  x1: T[],
  x2: T[]
): T[] => {
  const x2Keys = new Set(x2.map(toKey));
  return x1.filter((x) => !x2Keys.has(toKey(x)));
};

export const includesBy = <T>(
  toKey: (item: T) => string,
  target: T,
  xs: T[]
): boolean => {
  return xs.some((x) => equalBy(toKey, target, x));
};

export const groupBy = <T>(
  toKey: (item: T) => string,
  items: T[]
): { [key: string]: T[] } => {
  return items.reduce<{ [key: string]: T[] }>((itemsByKey, item) => {
    const key = toKey(item);
    return {
      ...itemsByKey,
      [key]: [...(itemsByKey[key] ?? []), item],
    };
  }, {});
};

export const indexBy = <T>(
  toKey: (item: T) => string,
  items: T[]
): { [key: string]: T } => {
  return items.reduce<{ [key: string]: T }>((itemsByKey, item) => {
    const key = toKey(item);
    return {
      ...itemsByKey,
      [key]: item,
    };
  }, {});
};

export const differenceWith = <TA, TB>(
  equal: (a: TA, b: TB) => boolean,
  as: TA[],
  bs: TB[]
): TA[] => {
  return as.filter((a) => !bs.some((b) => equal(a, b)));
};
