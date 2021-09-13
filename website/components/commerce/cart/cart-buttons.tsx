import { cartToTotalQuantity } from "@data-access";
import { appEventEmitter } from "@components/shared";
import { Fab, Tooltip, useTheme } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useCartQuery } from "./cart-state";

export const OpenCartIcon = ShoppingCartIcon;

export const OpenCartIconButton = (props: IconButtonProps) => {
  const cartQuery = useCartQuery();

  const handleClick = () => {
    appEventEmitter.emit("open-cart", {});
  };

  const badgeContent = cartQuery.data
    ? cartToTotalQuantity(cartQuery.data)
    : null;

  return (
    <Tooltip title="View Cart">
      <IconButton
        color="inherit"
        aria-label="view shopping cart"
        onClick={handleClick}
        {...props}
      >
        <Badge max={99} badgeContent={badgeContent} color="secondary">
          <OpenCartIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export const OpenCartFab = ({
  position = {
    vertical: "bottom",
    horizontal: "right",
  },
}: {
  position?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
}) => {
  const cartQuery = useCartQuery();

  const theme = useTheme();

  const handleClick = () => {
    appEventEmitter.emit("open-cart", {});
  };

  const badgeContent = cartQuery.data
    ? cartToTotalQuantity(cartQuery.data)
    : null;

  const sx = {
    left: position.horizontal === "left" ? theme.spacing(2) : undefined,
    top: position.vertical === "top" ? theme.spacing(2) : undefined,
    right: position.horizontal === "right" ? theme.spacing(2) : undefined,
    bottom: position.vertical === "bottom" ? theme.spacing(2) : undefined,
  };

  return (
    <Box
      sx={{
        ...sx,
        zIndex: theme.zIndex.speedDial,
        position: "fixed",
      }}
    >
      <Badge max={99} badgeContent={badgeContent} color="primary">
        <Tooltip title="Open Cart">
          <Fab variant="circular" onClick={handleClick}>
            <OpenCartIcon />
          </Fab>
        </Tooltip>
      </Badge>
    </Box>
  );
};
