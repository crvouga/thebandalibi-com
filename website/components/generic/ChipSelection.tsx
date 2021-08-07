import { Theme, useTheme } from "@material-ui/core";
import Box, { BoxProps } from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
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
  ChipProps,
  isDisabled,
}: {
  onUnselect?: (item: T) => void;
  onSelect: (item: T) => void;
  toKey: (item: T) => string;
  toLabel: (item: T) => string;
  toAvatar?: (item: T) => React.ReactElement;
  items: T[];
  isSelected: (item: T) => boolean;
  isDisabled?: (item: T) => boolean;
  sx?: BoxProps["sx"];
  ChipProps?: ChipProps;
}) => {
  const theme = useTheme();

  const itemSx = {
    display: "flex",
    paddingRight: 1,
    paddingBottom: 1,
  };

  const unselectedSx: BoxProps["sx"] = {
    minWidth: "3rem",
    minHeight: "3rem",
  };

  const selectedSx: BoxProps["sx"] = {
    minWidth: "3rem",
    minHeight: "3rem",

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
        alignItems: "center",
        ...sx,
      }}
    >
      {items.map((item) => (
        <Box key={toKey(item)} sx={itemSx}>
          {isSelected(item) ? (
            <Chip
              avatar={toAvatar?.(item)}
              label={toLabel(item)}
              clickable={Boolean(onUnselect)}
              onClick={() => onUnselect?.(item)}
              disabled={isDisabled?.(item)}
              {...ChipProps}
              sx={{ ...selectedSx, ...ChipProps?.sx }}
            />
          ) : (
            <Chip
              label={toLabel(item)}
              disabled={isDisabled?.(item)}
              avatar={toAvatar?.(item)}
              clickable={Boolean(onSelect)}
              onClick={() => onSelect(item)}
              {...ChipProps}
              sx={{ ...unselectedSx, ...ChipProps?.sx }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
