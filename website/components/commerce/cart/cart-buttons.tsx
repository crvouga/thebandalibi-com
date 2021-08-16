import { appEventEmitter, cartToTotalQuantity } from "@data-access";
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

export const OpenCartFab = () => {
  const cartQuery = useCartQuery();

  const theme = useTheme();

  const handleClick = () => {
    appEventEmitter.emit("open-cart", {});
  };

  const badgeContent = cartQuery.data
    ? cartToTotalQuantity(cartQuery.data)
    : null;

  return (
    <Box
      sx={{
        zIndex: theme.zIndex.speedDial,
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      }}
    >
      <Badge max={99} badgeContent={badgeContent} color="primary">
        <Fab variant="circular" onClick={handleClick}>
          <OpenCartIcon />
        </Fab>
      </Badge>
    </Box>
  );
};
