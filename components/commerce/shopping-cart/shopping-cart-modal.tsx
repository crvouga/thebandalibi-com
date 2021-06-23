import { useUiState } from "@data-access";
import { Theme, useMediaQuery } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { Button, CloseIconButton } from "generic-components";
import React from "react";

export const ShoppingCartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  const isScreenSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <Drawer
      open={uiState.state === "shopping-cart-opened"}
      onClose={handleClose}
      anchor={isScreenSmall ? "bottom" : "right"}
    >
      <Box p={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={1}
        >
          <Typography variant="h3">Shopping Cart</Typography>
          <CloseIconButton onClick={handleClose} />
        </Box>
        <Button size="large" fullWidth variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};
