import { transpose } from "./matrix";
import { takeWhile } from "./misc";
import { uniqueBy } from "./relation";

const allEqualEachOther = <T>(xs: T[]) =>
  uniqueBy((x) => String(x), xs).length <= 1;

export const toLongestCommonPrefix = (
  strings: string[],
  options?: {
    seperator?: string;
  }
) => {
  const seperator = options?.seperator ?? " ";

  const crossSections = transpose(
    strings.map((string) => string.split(seperator))
  );
  const equalCrossSections = takeWhile(allEqualEachOther, crossSections);

  return equalCrossSections
    .map((crossSection) => crossSection[0] ?? "")
    .join(seperator);
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
