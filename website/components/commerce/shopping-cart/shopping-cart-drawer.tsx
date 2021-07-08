import { Button, CloseIconButton } from "@components/generic";
import {
  cartToSubtotal,
  priceToString,
  useCartQuery,
  useRemoveCartItems,
  useUiState,
  useUpdateCartItems,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { useBreakpointDown } from "@utility";
import React from "react";
import { LineItemCard } from "./line-item-card";

const ShoppingCartDrawerBodyEmpty = () => {
  return (
    <Box
      sx={{
        paddingY: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
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
  );
};

export const ShoppingCartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setState("closed");
  };

  const breakpointDown = useBreakpointDown();

  const cartQuery = useCartQuery();
  const removeCartItems = useRemoveCartItems();
  const updateCartItems = useUpdateCartItems();

  return (
    <Drawer
      open={uiState.state === "shopping-cart-opened"}
      onClose={handleClose}
      variant="temporary"
      anchor={breakpointDown === "sm" ? "bottom" : "right"}
      sx={{}}
    >
      <Box
        sx={{
          p: 2,
          margin: "0 auto",
          maxWidth: "100%",
          width: "480px",
          height: "100%",
          maxHeight: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 1,
          }}
        >
          <Typography variant="h3">Your Shopping Cart</Typography>
          <CloseIconButton onClick={handleClose} />
        </Box>

        {!cartQuery.data && (
          <Box
            sx={{
              paddingY: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {cartQuery.data && cartQuery.data.lineItems.length === 0 && (
          <ShoppingCartDrawerBodyEmpty />
        )}

        {cartQuery.data && cartQuery.data.lineItems.length > 0 && (
          <>
            <List>
              {cartQuery.data.lineItems.map((lineItem) => (
                <LineItemCard
                  key={lineItem.lineItemId}
                  lineItem={lineItem}
                  isDeleting={
                    removeCartItems.status === "loading" &&
                    removeCartItems.variables?.includes(lineItem.lineItemId)
                  }
                  onDelete={(lineItem) => {
                    removeCartItems.mutate([lineItem.lineItemId]);
                  }}
                  onUpdate={(update) => {
                    updateCartItems.mutate([update]);
                  }}
                />
              ))}
            </List>

            <Box display="flex" justifyContent="space-between" paddingY={1}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">
                {priceToString(cartToSubtotal(cartQuery.data))}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="center"
            >
              Shipping, taxes, and discount codes calculated at checkout.
            </Typography>
            <Button
              href={cartQuery.data.checkoutUrl}
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              disabled={cartQuery.data.lineItems.length === 0}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};
