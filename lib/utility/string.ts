import { pipe, takeWhile, uniq } from "remeda";
import { transpose } from "./matrix";

const allEqualEachOther = <T>(xs: T[]) => uniq(xs).length <= 1;

export const toLongestCommonPrefix = (
  strings: string[],
  options?: {
    seperator?: string;
  }
) => {
  const seperator = options?.seperator ?? " ";

  return pipe(
    strings,

    (strings) => strings.map((string) => string.split(seperator)),

    transpose,

    (crossSections) => takeWhile(crossSections, allEqualEachOther),

    (crossSections) =>
      crossSections.map((crossSection) => crossSection[0] ?? "").join(seperator)
  );
};

export const descendAlphabeticallyBy = <T>(
  keyFn: (x: T) => string,
  xs: T[]
) => {
  return xs.sort((a, b) => {
    const nameA = keyFn(a);
    const nameB = keyFn(b);

    if (nameA < nameB) {
      return 1;
    }

    if (nameA > nameB) {
      return -1;
    }

    return 0;
  });
};
