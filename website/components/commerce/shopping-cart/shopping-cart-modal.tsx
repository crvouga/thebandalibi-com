import { Avatar, Button, CloseIconButton } from "@components/generic";
import {
  cartToSubtotal,
  priceToString,
  useCartQuery,
  useCartRemoveItems,
  useUiState,
} from "@data-access";
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

export const ShoppingCartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  const breakpointDown = useBreakpointDown();

  const cart = useCartQuery();

  const cartRemoveItems = useCartRemoveItems();

  const handleRemoveItem = async (lineItemId: string) => {
    await cartRemoveItems.mutate([lineItemId]);
  };

  return (
    <Drawer
      open={uiState.state === "shopping-cart-opened"}
      onClose={handleClose}
      anchor={breakpointDown === "sm" ? "bottom" : "right"}
    >
      <Box p={2} margin="0 auto" maxWidth="100%" width="480px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={1}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h3">Shopping Cart</Typography>
          </Box>
          <CloseIconButton onClick={handleClose} />
        </Box>

        {cart.data && cart.data.lineItems.length === 0 && cart.isFetching && (
          <Box paddingY={8} display="flex" width="100%" justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}

        {cart.data && cart.data.lineItems.length === 0 && !cart.isFetching && (
          <Box
            paddingY={8}
            display="flex"
            flexDirection="column"
            alignItems="centers"
          >
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Your cart is empty.
            </Typography>
          </Box>
        )}

        {cart.data && cart.data.lineItems.length > 0 && (
          <>
            <List>
              {cart.data.lineItems.map((lineItem) => (
                <ListItem
                  button
                  disableGutters
                  key={lineItem.lineItemId}
                  disabled={
                    cartRemoveItems.status === "loading" &&
                    cartRemoveItems.variables?.includes(lineItem.lineItemId)
                  }
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={lineItem.image.src} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${lineItem.productName}`}
                    secondary={`${lineItem.variantName} • ${priceToString(
                      lineItem.price
                    )}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      disabled={cartRemoveItems.status === "loading"}
                      aria-label="Remove Item"
                      onClick={() => handleRemoveItem(lineItem.lineItemId)}
                    >
                      {cartRemoveItems.status === "loading" &&
                      cartRemoveItems.variables?.includes(
                        lineItem.lineItemId
                      ) ? (
                        <CircularProgress size="1em" color="inherit" />
                      ) : (
                        <MdDelete />
                      )}
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
            <Button
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              disabled={cart.data.lineItems.length === 0}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};
