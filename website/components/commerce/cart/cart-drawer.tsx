import { Button, CloseIconButton } from "@components/generic";
import {
  CartItemQuantity,
  cartToSubtotal,
  CART_ITEM_QUANTITY_UPPER_BOUND,
  formatPrice,
  useCartQuery,
  useRemoveCartItems,
  useUiState,
  useUpdateCartItems,
} from "@data-access";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { NaturalNumber, useBreakpointDown } from "@utility";
import React from "react";
import { CartItemActions } from "./cart-item-actions";
import { CartItemInfo } from "./cart-item-info";

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

export const CartDrawer = () => {
  const uiState = useUiState();

  const handleClose = () => {
    uiState.setStatus("closed");
  };

  const breakpointDown = useBreakpointDown();

  const cartQuery = useCartQuery();
  const removeCartItems = useRemoveCartItems();
  const updateCartItems = useUpdateCartItems();

  const isRemovingCartItem = (cartItemId: string) => {
    return (
      removeCartItems.variables?.includes(cartItemId) &&
      removeCartItems.status === "loading"
    );
  };

  const isCartItemUpdating = (cartItemId: string) => {
    return (
      updateCartItems.variables?.some(
        (update) => update.cartItemId === cartItemId
      ) && updateCartItems.status === "loading"
    );
  };

  return (
    <Drawer
      open={uiState.status === "shopping-cart-opened"}
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

        {cartQuery.data && cartQuery.data.items.length === 0 && <CartEmpty />}

        {cartQuery.data && cartQuery.data.items.length > 0 && (
          <>
            <Box sx={{ paddingY: 1 }}>
              {cartQuery.data.items.map((cartItem) => (
                <Box
                  key={cartItem.cartItemId}
                  sx={{
                    opacity: isRemovingCartItem(cartItem.cartItemId) ? 0.5 : 1,
                    paddingBottom: 1,
                  }}
                >
                  <CartItemInfo cartItem={cartItem} />

                  <CartItemActions
                    canDecrement={cartItem.quantity > 1}
                    canIncrement={
                      cartItem.quantity < CART_ITEM_QUANTITY_UPPER_BOUND
                    }
                    updating={isCartItemUpdating(cartItem.cartItemId)}
                    removing={isRemovingCartItem(cartItem.cartItemId)}
                    onRemove={() => {
                      removeCartItems.mutate([cartItem.cartItemId]);
                    }}
                    onDecrement={() => {
                      updateCartItems.mutateAsync({
                        cartItemId: cartItem.cartItemId,
                        quantity: CartItemQuantity(cartItem.quantity - 1),
                      });
                    }}
                    onIncrement={() => {
                      updateCartItems.mutateAsync({
                        cartItemId: cartItem.cartItemId,
                        quantity: CartItemQuantity(cartItem.quantity + 1),
                      });
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
              disabled={cartQuery.data.items.length === 0}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};
