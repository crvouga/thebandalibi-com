import { Theme, useTheme } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import React from "react";

export const ChipSelection = <T,>({
  isSelected,
  toKey,
  toLabel,
  items,
  toAvatar,
  onSelect,
  onUnselect,
  sx,
}: {
  onUnselect?: (item: T) => void;
  onSelect: (item: T) => void;
  toKey: (item: T) => string;
  toLabel: (item: T) => string;
  toAvatar?: (item: T) => React.ReactElement;
  items: T[];
  isSelected: (item: T) => boolean;
  sx?: BoxProps["sx"];
}) => {
  const theme = useTheme();

  const itemSx = {
    display: "flex",
    paddingRight: 1,
    paddingBottom: 1,
  };

  const unselectedSx: BoxProps["sx"] = {
    fontSize: "1em",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 1),
  };

  const selectedSx: BoxProps["sx"] = {
    display: "flex",
    alignItems: "center",
    fontSize: "1em",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 1),
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),

    "&:active, &:focus": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.getContrastText(theme.palette.text.primary),
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        ...sx,
      }}
    >
      {items.map((item) => (
        <Box key={toKey(item)} sx={itemSx}>
          {isSelected(item) ? (
            <Chip
              avatar={toAvatar?.(item)}
              label={toLabel(item)}
              clickable
              onClick={() => onUnselect?.(item)}
              sx={selectedSx}
            />
          ) : (
            <Chip
              label={toLabel(item)}
              avatar={toAvatar?.(item)}
              clickable
              onClick={() => onSelect(item)}
              sx={unselectedSx}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
