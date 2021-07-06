import { useUiState } from "@data-access";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

export const ShoppingCartIconButton = () => {
  const uiState = useUiState();

  const handleClick = () => {
    uiState.setState("shopping-cart-opened");
  };

  return (
    <IconButton
      color="inherit"
      aria-label="view shopping cart"
      onClick={handleClick}
    >
      <MdShoppingCart />
    </IconButton>
  );
};
