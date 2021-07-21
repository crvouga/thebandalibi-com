export type INonNegativeNumber = number & { type: "NonNegativeNumber" };

export const NonNegativeNumber = (number: unknown): INonNegativeNumber => {
  return Math.max(0, Number(number) ?? 0) as INonNegativeNumber;
};

export type INaturalNumber = number & { type: "NaturalNumber" };

export const NaturalNumber = (number: number): INaturalNumber => {
  return Math.max(1, Math.floor(number)) as INaturalNumber;
};
