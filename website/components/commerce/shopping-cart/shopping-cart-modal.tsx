import { Avatar, Button, CloseIconButton } from "@components/generic";
import { useCart, useUiState } from "@data-access";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useBreakpointDown } from "@utility";
import React from "react";
import { MdDelete } from "react-icons/md";
import {
  priceToString,
  cartToSubtotal,
  useCartRemoveItems,
} from "@data-access";

export const ShoppingCartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  const breakpointDown = useBreakpointDown();

  const cart = useCart();

  const cartRemoveItems = useCartRemoveItems();

  const handleRemoveItem = async (lineItemId: string) => {
    await cartRemoveItems.mutateAsync([lineItemId]);
  };

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

        {cart.isLoading && (
          <Container>
            <CircularProgress />
          </Container>
        )}

        {cart.data && (
          <>
            <List>
              {cart.data.lineItems.map((lineItem) => (
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={lineItem.image.src} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${lineItem.productName} • ${lineItem.variantName}`}
                    secondary={`${priceToString(lineItem.price)}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="Remove Item"
                      onClick={() => handleRemoveItem(lineItem.lineItemId)}
                    >
                      <MdDelete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Box display="flex" justifyContent="space-between" paddingY={1}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">
                {priceToString(cartToSubtotal(cart.data))}
              </Typography>
            </Box>
          </>
        )}

        <Button size="large" fullWidth variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};
