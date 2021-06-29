import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import React from "react";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),

    "&:active, &:focus": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.getContrastText(theme.palette.text.primary),
    },
  },
}));

export const ChipSelection = <T,>({
  isSelected,
  toKey,
  toLabel,
  items,
  onSelect,
  onUnselect,
}: {
  onUnselect: (item: T) => void;
  onSelect: (item: T) => void;
  toKey: (item: T) => string;
  toLabel: (item: T) => string;
  items: T[];
  isSelected: (item: T) => boolean;
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap">
      {items.map((item) => (
        <Box
          display="flex"
          key={toKey(item)}
          paddingRight={1}
          paddingBottom={1}
        >
          {isSelected(item) ? (
            <Chip
              variant="default"
              className={classes.selected}
              label={toLabel(item)}
              clickable
              onClick={() => onUnselect(item)}
            />
          ) : (
            <Chip
              variant="outlined"
              label={toLabel(item)}
              clickable
              onClick={() => onSelect(item)}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
