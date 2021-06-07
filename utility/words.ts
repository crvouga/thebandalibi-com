export const plural = ({
  count,
  singularWord,
}: {
  count: number | string;
  singularWord: string;
}) => `${count} ${singularWord}${Number(count) === 1 ? "" : "s"}`;
