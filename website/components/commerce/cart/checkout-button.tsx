import Button, { LoadingButtonProps } from "@material-ui/lab/LoadingButton";
import { useBoolean } from "@utility";
import React from "react";

export const CheckoutButton = ({
  checkoutUrl,
  ...props
}: { checkoutUrl: string } & LoadingButtonProps) => {
  const loading = useBoolean(false);
  return (
    <Button
      href={checkoutUrl}
      onClick={loading.setTrue}
      size="large"
      fullWidth
      variant="contained"
      color="primary"
      loading={loading.value}
      {...props}
    >
      Proceed To Checkout
    </Button>
  );
};
