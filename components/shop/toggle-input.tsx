import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { useState } from "react";

type IToggleInputProps<T> = {
  selected?: T;
  values: T[];
  onClick: (clicked: T) => void;
};

export const useToggleInputState = <T,>({
  initialSelected,
  values,
}: {
  initialSelected?: T;
  values: T[];
}): IToggleInputProps<T> => {
  const [selected, setSelected] = useState<T | undefined>(initialSelected);

  const onClick = (clicked: T) => {
    setSelected((selected) => (clicked === selected ? undefined : clicked));
  };

  return {
    selected,
    values,
    onClick,
  };
};

export const ToggleInput = <T,>({
  selected,
  values,
  onClick,
  valueToLabel,
}: IToggleInputProps<T> & { valueToLabel?: (value: T) => string }) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {values.map((value) => (
        <Box
          key={String(value)}
          paddingRight={1}
          paddingTop={1}
          onClick={() => onClick(value)}
        >
          <Chip
            clickable
            variant={value === selected ? "default" : "outlined"}
            label={valueToLabel ? valueToLabel(value) : value}
          />
        </Box>
      ))}
    </Box>
  );
};
