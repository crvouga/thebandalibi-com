import { CartItemQuantity, ICart, IProductVariant } from "@data-access";
import Button from "@material-ui/lab/LoadingButton";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useAppEventEmitter } from "../../../top-level";
import { useAddCartItems } from "../../cart/cart-state";

export const AddToCartButton = ({
  cart,
  selectedVariant,
}: {
  cart: ICart;
  selectedVariant: IProductVariant | null;
}) => {
  const addCartItems = useAddCartItems({ cart });
  const appEventEmitter = useAppEventEmitter();

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      return;
    }

    await addCartItems.mutateAsync([
      {
        variantId: selectedVariant.variantId,
        quantity: CartItemQuantity(1),
      },
    ]);

    appEventEmitter.emit("open-cart", {});
  };

  return (
    <Button
      startIcon={<MdAddShoppingCart />}
      loading={addCartItems.status === "loading"}
      disabled={selectedVariant === null}
      onClick={handleAddToCart}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
    >
      Add To Cart
    </Button>
  );
};

export const AddToCartButtonSkeleton = () => {
  return (
    <Button
      startIcon={<MdAddShoppingCart />}
      loading
      fullWidth
      size="large"
      variant="contained"
      color="primary"
    >
      Add To Cart
    </Button>
  );
};
