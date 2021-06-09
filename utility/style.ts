export const createLinearGradient = ({
  start,
  end,
}: {
  start: string;
  end: string;
}) => {
  return `linear-gradient(${start}, ${end})`;
};
