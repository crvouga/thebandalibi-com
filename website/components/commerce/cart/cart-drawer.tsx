import { CardActionArea, CloseIconButton } from "@components/generic";
import { routes, useAppEventEmitter } from "@components/shared";
import {
  CartItemQuantity,
  cartToSubtotal,
  formatPrice,
  ICart,
} from "@data-access";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { useBreakpointDown, useEventEmitter } from "@utility";
import React, { useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { LoadingLink } from "../../shared";
import { CartItemActions } from "./cart-item-actions";
import { CartItemInfo } from "./cart-item-info";
import {
  useCartQuery,
  useRemoveCartItems,
  useUpdateCartItems,
} from "./cart-state";
import { CheckoutButton } from "./checkout-button";

const CartEmpty = () => {
  return (
    <Box
      sx={{
        paddingY: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.secondary",
        "& > *": {
          marginBottom: 1,
        },
      }}
    >
      <MdRemoveShoppingCart
        style={{
          width: "64px",
          height: "64px",
        }}
      />
      <Typography variant="h5" align="center" gutterBottom>
        Your cart is empty.
      </Typography>

      <LoadingLink color="primary" variant="contained" href={routes.store()}>
        Browse Store
      </LoadingLink>
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

const CartLoaded = ({ cart }: { cart: ICart }) => {
  const removeCartItems = useRemoveCartItems({ cart });
  const updateCartItems = useUpdateCartItems({ cart });

  const isCartUpdating =
    updateCartItems.status === "loading" ||
    removeCartItems.status === "loading";

  return (
    <Box
      sx={{
        paddingY: 1,
        position: "relative",
      }}
    >
      <Fade in={isCartUpdating}>
        <Box
          sx={{
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <CircularProgress />
        </Box>
      </Fade>

      {cart.items.map((cartItem) => (
        <Box sx={{ p: 2 }} key={cartItem.cartItemId}>
          <CardActionArea href={routes.singleProduct(cartItem)}>
            <CartItemInfo cartItem={cartItem} />
          </CardActionArea>

          <CartItemActions
            disabled={isCartUpdating}
            onRemove={() => {
              removeCartItems.mutate([cartItem.cartItemId]);
            }}
            onDecrement={() => {
              updateCartItems.mutateAsync([
                {
                  cartItemId: cartItem.cartItemId,
                  quantity: CartItemQuantity(cartItem.quantity - 1),
                },
              ]);
            }}
            onIncrement={() => {
              updateCartItems.mutateAsync([
                {
                  cartItemId: cartItem.cartItemId,
                  quantity: CartItemQuantity(cartItem.quantity + 1),
                },
              ]);
            }}
          />

          <Divider />
        </Box>
      ))}

      <Box sx={{ paddingX: 2, paddingBottom: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: 1,
          }}
        >
          <Typography>Subtotal</Typography>

          <Typography>{formatPrice(cartToSubtotal(cart))}</Typography>
        </Box>

        <Typography variant="body2" color="textSecondary" align="center">
          Shipping, taxes, and discount codes calculated at checkout.
        </Typography>

        <CheckoutButton
          checkoutUrl={cart.checkoutUrl}
          disabled={cart.items.length === 0}
        />
      </Box>
    </Box>
  );
};

export const CartDrawer = () => {
  const [state, setState] = useState<"closed" | "opened">("closed");

  const appEventEmitter = useAppEventEmitter();

  useEventEmitter(appEventEmitter, {
    "open-cart": () => {
      setState("opened");
    },
    "close-cart": () => {
      setState("closed");
    },
    "route-changed-completed": () => {
      setState("closed");
    },
  });

  const handleClose = () => {
    appEventEmitter.emit("close-cart", {});
  };

  const breakpointDown = useBreakpointDown();

  const cartQuery = useCartQuery();

  return (
    <Drawer
      open={state === "opened"}
      onClose={handleClose}
      anchor={breakpointDown === "sm" ? "bottom" : "right"}
    >
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "100%",
          width: "480px",
          height: "100%",
          maxHeight: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
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
          <CartLoaded cart={cartQuery.data} />
        )}
      </Box>
    </Drawer>
  );
};
