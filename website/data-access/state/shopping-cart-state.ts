import { commerce } from "@data-access";
import { usePersistedState } from "@utility";
import { useMutation, useQuery } from "react-query";

const CART_ID_KEY = "CART_ID";

export const useCart = () => {
  const [cartId, setCartId] = usePersistedState<string | null>(
    CART_ID_KEY,
    null
  );

  const getElseCreateCart = async () => {
    if (cartId) {
      return commerce.cart.get(cartId);
    }

    const cart = await commerce.cart.create();

    setCartId(cart.cartId);

    return cart;
  };

  return useQuery(["cart", cartId], getElseCreateCart);
};

export const useCartAddItems = () => {
  const cart = useCart();

  console.log({ cart });

  const addItems = (params: Parameters<typeof commerce.cart.add>[1]) => {
    if (cart.data?.cartId) {
      return commerce.cart.add(cart.data.cartId, params);
    }

    throw new Error("Cart is not loaded");
  };

  return useMutation(addItems);
};
