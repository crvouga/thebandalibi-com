export type IPositiveNumber = number & { type: "PositiveNumber" };

export const PositiveNumber = (number: number): IPositiveNumber => {
  return Math.max(0, number) as IPositiveNumber;
};

export type INaturalNumber = number & { type: "NaturalNumber" };

export const NaturalNumber = (number: number): INaturalNumber => {
  return Math.max(1, Math.floor(number)) as INaturalNumber;
};
