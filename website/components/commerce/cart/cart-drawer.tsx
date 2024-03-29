import {
  ConformationDialog,
  Button,
  CardActionArea,
  CloseIconButton,
} from "@components/generic";
import { ICartEvents, IRouterEvents } from "@components/shared";
import { CALL_TO_ACTIONS, ROUTES } from "@config";
import {
  CartItemQuantity,
  cartToSubtotal,
  formatPrice,
  ICart,
} from "@data-access";
import { useTheme } from "@material-ui/core";
import Alert from "@material-ui/core/Alert";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Fade from "@material-ui/core/Fade";
import { alpha } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IEventEmitter, useBreakpointDown, useEventEmitter } from "@utility";
import React, { useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CartItemActions } from "./cart-item-actions";
import { CartItemInfo } from "./cart-item-info";
import {
  useCartStateContext,
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

      <Button color="primary" variant="contained" href={ROUTES.commerce()}>
        {CALL_TO_ACTIONS.commerceLink}
      </Button>
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

const LoadingBackdrop = ({ open }: { open: boolean }) => {
  const theme = useTheme();

  return (
    <Fade in={open}>
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
          backgroundColor: alpha(theme.palette.background.paper, 0.5),
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    </Fade>
  );
};

const CartLoaded = ({ cart }: { cart: ICart }) => {
  const { resetCart } = useCartStateContext();
  const removeCartItems = useRemoveCartItems({ cart });
  const updateCartItems = useUpdateCartItems({ cart });

  const errors = removeCartItems?.data?.[1] ?? [];

  const [state, setState] = useState<"closed" | "opened">("closed");

  const isCartItemUpdating = (cartItemId: string) => {
    return Boolean(
      updateCartItems.status === "loading" &&
        updateCartItems.variables?.some(
          (update) => update.cartItemId === cartItemId
        )
    );
  };

  const isCartItemRemoving = (cartItemId: string) => {
    return Boolean(
      removeCartItems.status === "loading" &&
        removeCartItems.variables?.includes(cartItemId)
    );
  };

  const isCartItemLoading = (cartItemId: string) => {
    return isCartItemRemoving(cartItemId) || isCartItemUpdating(cartItemId);
  };

  return (
    <Box
      sx={{
        paddingY: 1,
        position: "relative",
      }}
    >
      {errors.map((error) => {
        return (
          <Alert key={error.message} severity="error" sx={{ marginX: 2 }}>
            {error.message}
          </Alert>
        );
      })}

      {cart.items.map((cartItem) => (
        <Box
          key={cartItem.cartItemId}
          sx={{ paddingY: 2, position: "relative" }}
        >
          <LoadingBackdrop open={isCartItemLoading(cartItem.cartItemId)} />
          <CardActionArea
            href={ROUTES.singleProduct(cartItem)}
            sx={{ paddingX: 2 }}
          >
            <CartItemInfo cartItem={cartItem} />
          </CardActionArea>

          <CartItemActions
            decrementDisabled={cartItem.quantity <= 1}
            disabled={isCartItemLoading(cartItem.cartItemId)}
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
        </Box>
      ))}
      <Box sx={{ paddingX: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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

        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            onClick={() => {
              setState("opened");
            }}
            size="small"
            color="inherit"
            sx={{ marginTop: 1 }}
          >
            Reset
          </Button>

          <ConformationDialog
            open={state === "opened"}
            title="Reset Cart?"
            confirmTitle="Reset"
            onCancel={() => {
              setState("closed");
            }}
            onConfirm={() => {
              setState("closed");
              resetCart();
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export const CartDrawer = ({
  eventEmitter,
}: {
  eventEmitter: IEventEmitter<ICartEvents & IRouterEvents>;
}) => {
  const [state, setState] = useState<"closed" | "opened">("closed");

  useEventEmitter(eventEmitter, {
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
    eventEmitter.emit("close-cart", {});
  };

  const cartQuery = useCartQuery();

  const theme = useTheme();

  const currentBreakpointDown = useBreakpointDown();

  const anchor = currentBreakpointDown === "sm" ? "bottom" : "right";

  return (
    <Drawer
      open={state === "opened"}
      onClose={handleClose}
      anchor={anchor}
      sx={{
        "& .MuiDrawer-paper": {
          margin: "auto",
          width: "100vw",
          maxWidth: theme.breakpoints.values.sm,
        },
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

        <CloseIconButton label="Close Cart" onClick={handleClose} />
      </Box>

      {!cartQuery.data && <CartLoading />}
      {cartQuery.data && cartQuery.data.items.length === 0 && <CartEmpty />}
      {cartQuery.data && cartQuery.data.items.length > 0 && (
        <CartLoaded cart={cartQuery.data} />
      )}
    </Drawer>
  );
};
