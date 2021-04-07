import { takeWhile, pipe } from "remeda";
import { transpose } from "./matrix";

const allEqualEachOther = <T>(xs: T[]) => new Set(xs).size <= 1;

export const toLongestCommonPrefix = (strings: string[]) => {
  return pipe(
    strings,

    (strings) => strings.map((string) => string.split("")),

    transpose,

    (crossSections) => takeWhile(crossSections, allEqualEachOther),

    (crossSections) =>
      crossSections.map((crossSection) => crossSection[0] ?? "").join("")
  );
};
