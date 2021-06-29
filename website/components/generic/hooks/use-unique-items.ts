import { useState } from "react";

export const useUniqueItems = <T>({
  equals,
  unique,
}: {
  equals: (a: T, b: T) => boolean;
  unique: (items: T[]) => T[];
}) => {
  const [items, setItems] = useState<T[]>([]);

  const add = (item: T) => {
    setItems((items) => unique([...items, item]));
  };

  const remove = (item: T) => {
    setItems((items) => items.filter((_) => !equals(_, item)));
  };

  const includes = (item: T) => {
    return items.some((_) => equals(_, item));
  };

  return {
    items,
    add,
    remove,
    includes,
  };
};
