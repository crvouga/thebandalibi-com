import { CartItemQuantity, ICartItemQuantity } from "@data-access";
import { useState } from "react";

export const useCartQuantityState = (initial: number) => {
  const [quantity, setQuantity] = useState<ICartItemQuantity>(
    CartItemQuantity(initial)
  );

  const onIncrement = () => {
    setQuantity((quantity) => CartItemQuantity(quantity + 1));
  };

  const onDecrement = () => {
    setQuantity((quantity) => CartItemQuantity(quantity - 1));
  };

  return {
    quantity,
    onIncrement,
    onDecrement,
  };
};
