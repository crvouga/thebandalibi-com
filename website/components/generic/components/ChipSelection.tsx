import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  chip: {
    fontSize: "1em",
    boxSizing: "border-box",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 1),
  },

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
    <Box display="flex" flexWrap="wrap" justifyContent="center">
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
              className={clsx(classes.selected, classes.chip)}
              label={toLabel(item)}
              clickable
              onClick={() => onUnselect(item)}
            />
          ) : (
            <Chip
              className={classes.chip}
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
