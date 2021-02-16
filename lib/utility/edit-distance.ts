import levenshtein from "fast-levenshtein";
export const editDistance = (a: string, b: string) => levenshtein.get(a, b);
