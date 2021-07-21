export const dateToYear = (date: string) =>
  new Date(date).getFullYear().toString();

export type IDateISO = string & { type: "DateISO" };

const removeTime = (iso: string) => iso.substring(0, 10);

export const DateISO = (unknownDate: unknown) => {
  //@ts-ignore
  const date = new Date(unknownDate);

  return removeTime(date.toISOString()) as IDateISO;
};

export const isSameYearMonthDay = (date1: Date, date2: Date) => {
  return DateISO(date1) === DateISO(date2);
};

export type IDateRange = {
  start: Date;
  end: Date;
};

export const toMonthDateRange = (date: Date): IDateRange => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);

  return {
    start,
    end,
  };
};
