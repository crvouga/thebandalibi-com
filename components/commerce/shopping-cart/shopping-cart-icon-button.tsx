import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdShoppingCart } from "react-icons/md";

export const ShoppingCartIconButton = () => {
  const handleClick = () => {};

  return (
    <IconButton aria-label="view shopping cart" onClick={handleClick}>
      <MdShoppingCart />
    </IconButton>
  );
};
