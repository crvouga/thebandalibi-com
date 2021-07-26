import { appEventEmitter } from "@data-access";
import { cartToTotalQuantity } from "@data-access";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useCartQuery } from "./cart-state";

export const OpenCartIconButton = () => {
  const cartQuery = useCartQuery();

  const handleClick = () => {
    appEventEmitter.emit("open-cart", {});
  };

  const badgeContent = cartQuery.data
    ? cartToTotalQuantity(cartQuery.data)
    : null;

  return (
    <IconButton
      color="inherit"
      aria-label="view shopping cart"
      onClick={handleClick}
    >
      <Badge max={99} badgeContent={badgeContent} color="secondary">
        <MdShoppingCart />
      </Badge>
    </IconButton>
  );
};
