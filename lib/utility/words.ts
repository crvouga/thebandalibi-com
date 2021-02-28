export const plural = (count: number, singularWord: string) =>
  `${count} ${singularWord}${count === 1 ? "" : "s"}`;
