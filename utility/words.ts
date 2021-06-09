export const abbreviateNumber = (number: number) => {
  const options = {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  };

  return Intl.NumberFormat("en", options).format(number);
};

export const plural = ({
  count,
  singularWord,
}: {
  count: number | string;
  singularWord: string;
}) => {
  return `${count} ${singularWord}${Number(count) === 1 ? "" : "s"}`;
};

export const formatCollectionCount = ({
  count,
  singularWord,
}: {
  count: number | string;
  singularWord: string;
}) => {
  return plural({
    count: abbreviateNumber(Number(count)),
    singularWord,
  });
};
