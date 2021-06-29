export const minBy = <T>(f: (x: T) => number, a: T, b: T): T =>
  f(a) < f(b) ? a : b;

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
