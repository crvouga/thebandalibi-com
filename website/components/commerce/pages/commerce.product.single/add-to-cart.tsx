import { CartItemActions } from "@components/commerce/cart/cart-item-actions";
import { CartItemInfo } from "@components/commerce/cart/cart-item-info";
import { useCartQuantityState } from "@components/commerce/cart/cart-quantity-state";
import { useCartQuery } from "@components/commerce/cart/cart-state";
import { CALL_TO_ACTIONS } from "@config";
import {
  appEventEmitter,
  IProduct,
  IProductOption,
  selectedOptionsToVariant,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import LoadingButton from "@material-ui/lab/LoadingButton";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useAddCartItems } from "../../cart/cart-state";

export const AddToCart = ({
  product,
  selectedOptions,
}: {
  product: IProduct;
  selectedOptions: IProductOption[];
}) => {
  const selectedVariant = selectedOptionsToVariant(product, selectedOptions);

  const cartQuery = useCartQuery();

  const addCartItems = useAddCartItems({
    cart: cartQuery.data,
  });

  const { quantity, onIncrement, onDecrement } = useCartQuantityState(1);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      return;
    }

    await addCartItems.mutateAsync([
      {
        variantId: selectedVariant.variantId,
        quantity: quantity,
      },
    ]);

    appEventEmitter.emit("open-cart", {});
  };

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Box>
        {selectedVariant && (
          <Box sx={{ marginBottom: 2 }}>
            <CartItemInfo
              cartItem={{
                ...selectedVariant,
                quantity: quantity,
              }}
            />
            <CartItemActions
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </Box>
        )}
      </Box>

      <LoadingButton
        startIcon={<MdAddShoppingCart />}
        loading={addCartItems.status === "loading" || !cartQuery.data}
        disabled={selectedVariant === null}
        onClick={handleAddToCart}
        fullWidth
        size="large"
        variant="contained"
        color="primary"
      >
        {CALL_TO_ACTIONS.addToCart}
      </LoadingButton>
    </Paper>
  );
};
