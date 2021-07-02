import {
  Button,
  CloseIconButton,
  useBreakpointDown,
} from "@components/generic";
import { useUiState } from "@data-access";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const ShoppingCartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  const breakpointDown = useBreakpointDown();

  return (
    <Drawer
      open={uiState.state === "shopping-cart-opened"}
      onClose={handleClose}
      anchor={breakpointDown === "sm" ? "bottom" : "right"}
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
