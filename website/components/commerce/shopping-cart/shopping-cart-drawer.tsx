import { Button, CloseIconButton } from "@components/generic";
import {
  cartToSubtotal,
  formatPrice,
  useCartQuery,
  useRemoveCartItems,
  useUiState,
  useUpdateCartItems,
} from "@data-access";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {
  differenceWith,
  NaturalNumber,
  toggle,
  useBreakpointDown,
} from "@utility";
import React, { useEffect, useState } from "react";
import { LineItemInfo } from "./line-item-info";
import { LineItemActions } from "./line-item-actions";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

const CartEmpty = () => {
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

const CartLoading = () => {
  return (
    <Box
      sx={{
        paddingY: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit" />
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

  const isRemovingLineItem = (lineItemId: string) => {
    return (
      removeCartItems.variables?.includes(lineItemId) &&
      removeCartItems.status === "loading"
    );
  };

  return (
    <Drawer
      open={uiState.state === "shopping-cart-opened"}
      onClose={handleClose}
      variant="temporary"
      anchor={breakpointDown === "sm" ? "bottom" : "right"}
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

        {!cartQuery.data && <CartLoading />}

        {cartQuery.data && cartQuery.data.lineItems.length === 0 && (
          <CartEmpty />
        )}

        {cartQuery.data && cartQuery.data.lineItems.length > 0 && (
          <>
            <Box sx={{ paddingY: 1 }}>
              {cartQuery.data.lineItems.map((lineItem) => (
                <Box
                  key={lineItem.lineItemId}
                  sx={{
                    opacity: isRemovingLineItem(lineItem.lineItemId) ? 0.5 : 1,
                    paddingBottom: 1,
                  }}
                >
                  <LineItemInfo lineItem={lineItem} />

                  <LineItemActions
                    removing={isRemovingLineItem(lineItem.lineItemId)}
                    onRemove={() => {
                      removeCartItems.mutate([lineItem.lineItemId]);
                    }}
                    onDecrement={() => {
                      updateCartItems.mutate([
                        {
                          lineItemId: lineItem.lineItemId,
                          quantity: NaturalNumber(lineItem.quantity - 1),
                        },
                      ]);
                    }}
                    onIncrement={() => {
                      updateCartItems.mutate([
                        {
                          lineItemId: lineItem.lineItemId,
                          quantity: NaturalNumber(lineItem.quantity + 1),
                        },
                      ]);
                    }}
                  />
                  <Divider />
                </Box>
              ))}
            </Box>

            <Box flex={1} />

            <Box display="flex" justifyContent="space-between" paddingY={1}>
              <Typography>Subtotal</Typography>

              <Typography>
                {formatPrice(cartToSubtotal(cartQuery.data))}
              </Typography>
            </Box>

            <Typography variant="body2" color="textSecondary" align="center">
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
