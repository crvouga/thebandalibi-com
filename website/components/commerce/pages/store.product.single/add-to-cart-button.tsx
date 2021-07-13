import Button, { LoadingButtonProps } from "@material-ui/lab/LoadingButton";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

export const AddToCartButton = (props: LoadingButtonProps) => {
  return (
    <Button
      startIcon={props.loading ? undefined : <MdAddShoppingCart />}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      {...props}
    >
      Add To Cart
    </Button>
  );
};
