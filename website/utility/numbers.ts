export type INaturalNumber = number & { type: "NaturalNumber" };

export const NaturalNumber = (number: number): INaturalNumber => {
  return Math.max(1, Math.floor(number)) as INaturalNumber;
};
