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
import { LineItemCard } from "./line-item-card";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

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

  const [status, setStatus] = useState<"normal" | "editing">("normal");

  useEffect(() => {
    setStatus("normal");
  }, [uiState.state]);

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

        {!cartQuery.data && (
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
        )}

        {cartQuery.data && cartQuery.data.lineItems.length === 0 && (
          <ShoppingCartDrawerBodyEmpty />
        )}

        {cartQuery.data && cartQuery.data.lineItems.length > 0 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                color="inherit"
                onClick={() =>
                  setStatus((status) =>
                    status === "editing" ? "normal" : "editing"
                  )
                }
              >
                {status === "editing" ? "Done" : "Edit"}
              </Button>
            </Box>

            <Divider />

            <Box sx={{ paddingY: 1 }}>
              {cartQuery.data.lineItems.map((lineItem) => (
                <Box
                  key={lineItem.lineItemId}
                  sx={{
                    opacity:
                      removeCartItems.status === "loading" &&
                      removeCartItems.variables?.includes(lineItem.lineItemId)
                        ? 0.5
                        : 1,
                  }}
                >
                  <LineItemCard lineItem={lineItem} />
                  <Collapse in={status === "editing"}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ButtonGroup color="inherit">
                        <Button
                          color="inherit"
                          onClick={() => {
                            updateCartItems.mutate([
                              {
                                lineItemId: lineItem.lineItemId,
                                quantity: NaturalNumber(lineItem.quantity - 1),
                              },
                            ]);
                          }}
                        >
                          <MdRemove />
                        </Button>
                        <Button
                          color="inherit"
                          onClick={() => {
                            updateCartItems.mutate([
                              {
                                lineItemId: lineItem.lineItemId,
                                quantity: NaturalNumber(lineItem.quantity + 1),
                              },
                            ]);
                          }}
                        >
                          <MdAdd />
                        </Button>
                      </ButtonGroup>

                      <Button
                        color="inherit"
                        loading={
                          removeCartItems.status === "loading" &&
                          removeCartItems.variables?.includes(
                            lineItem.lineItemId
                          )
                        }
                        startIcon={<MdDelete />}
                        onClick={() =>
                          removeCartItems.mutate([lineItem.lineItemId])
                        }
                      >
                        Remove
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Box>

            <Divider />

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
