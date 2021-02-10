import { useCallback, useState } from "react";

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, [setValue]);

  const setFalse = useCallback(() => {
    setValue(false);
  }, [setValue]);

  const toggle = useCallback(() => {
    setValue((value) => !value);
  }, [setValue]);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
};
