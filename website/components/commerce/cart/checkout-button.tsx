import { CALL_TO_ACTIONS } from "@config";
import Button, { LoadingButtonProps } from "@material-ui/lab/LoadingButton";
import React, { useState } from "react";

export const CheckoutButton = ({
  checkoutUrl,
  ...props
}: { checkoutUrl: string } & LoadingButtonProps) => {
  const [state, setState] = useState<"loading" | "idle">("idle");

  return (
    <Button
      href={checkoutUrl}
      onClick={() => {
        setState("loading");
      }}
      size="large"
      fullWidth
      variant="contained"
      color="primary"
      loading={state === "loading"}
      {...props}
    >
      {CALL_TO_ACTIONS.checkout}
    </Button>
  );
};
