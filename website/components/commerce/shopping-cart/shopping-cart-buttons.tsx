import { useUiState } from "@data-access";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";

export const ShoppingCartAddButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      startIcon={<MdAddShoppingCart />}
      disabled={disabled}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
    >
      Add To Cart
    </Button>
  );
};

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
