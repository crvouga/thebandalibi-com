import levenshtein from "fast-levenshtein";
import getYouTubeId from "get-youtube-id";

export const editDistance = (a: string, b: string) => levenshtein.get(a, b);

export const minBy = <T>(f: (x: T) => number, a: T, b: T): T =>
  f(a) < f(b) ? a : b;

export const minimumBy = <T>(f: (x: T) => number, [x, ...xs]: T[]): T =>
  xs.reduce((min, x) => minBy(f, min, x), x);

export const toYouTubeThumbnailUrl = (containsYouTubeId: string) => {
  const youTubeVideoId = getYouTubeId(containsYouTubeId);

  return `https://img.youtube.com/vi/${youTubeVideoId}/hqdefault.jpg`;
};
