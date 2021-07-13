import { cartToTotalQuantity, useCartQuery, useCartUi } from "@data-access";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

export const OpenCartIconButton = () => {
  const cartUi = useCartUi();
  const cartQuery = useCartQuery();

  const handleClick = () => {
    cartUi.setStatus("opened");
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
