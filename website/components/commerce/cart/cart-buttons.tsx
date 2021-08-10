import { appEventEmitter } from "@data-access";
import { cartToTotalQuantity } from "@data-access";
import { Fab, Tooltip, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartQuery } from "./cart-state";
import Typography from "@material-ui/core/Typography";

export const OpenCartIcon = ShoppingCartIcon;

export const OpenCartIconButton = () => {
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
      >
        <Badge max={99} badgeContent={badgeContent} color="primary">
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
