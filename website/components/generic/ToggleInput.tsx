import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@components/generic";
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
  initialSelected: T;
  values: T[];
}): IToggleInputProps<T> => {
  const [selected, setSelected] = useState<T | undefined>(initialSelected);

  const onClick = (clicked: T) => {
    setSelected(clicked);
  };

  return {
    selected,
    values,
    onClick,
  };
};

export const ToggleInputChips = <T,>({
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
            style={{
              fontSize: "1.2em",
              borderRadius: "0.25em",
              padding: "0.5em",
            }}
            clickable
            variant={value === selected ? "default" : "outlined"}
            label={valueToLabel ? valueToLabel(value) : value}
          />
        </Box>
      ))}
    </Box>
  );
};

export const ToggleInputAvatars = <T,>({
  values,
  onClick,
  valueToSrc,
  selected,
}: IToggleInputProps<T> & { valueToSrc: (value: T) => string }) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {values.map((value) => (
        <Box
          key={valueToSrc(value)}
          paddingRight={1}
          onClick={() => onClick(value)}
        >
          <ListItem
            button
            selected={value === selected}
            style={{
              borderRadius: "0.5em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItemAvatar>
              <Avatar
                style={{ width: "80px", height: "80px" }}
                src={valueToSrc(value)}
              />
            </ListItemAvatar>
            <ListItemText primary={value} />
          </ListItem>
        </Box>
      ))}
    </Box>
  );
};
