import { Button } from "@components/generic";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export const AddToCartButton = ({
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
      loading={loading}
    >
      Add To Cart
    </Button>
  );
};
