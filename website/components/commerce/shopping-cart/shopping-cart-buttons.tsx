import { useUiState } from "@data-access";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";

export const ShoppingCartAddButton = ({
  onClick,
  disabled = false,
  loading = false,
}: {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}) => {
  return (
    <Button
      onClick={onClick}
      startIcon={loading ? undefined : <MdAddShoppingCart />}
      disabled={disabled || loading}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
    >
      {loading ? (
        <CircularProgress disableShrink color="inherit" size="1.75em" />
      ) : (
        `Add To Cart`
      )}
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
