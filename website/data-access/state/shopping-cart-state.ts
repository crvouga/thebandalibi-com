import { commerce } from "@data-access";
import { ILineItem } from "data-access/commerce";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import create from "zustand";

type IStore = {
  cartId?: string;
  setCartId: (checkoutId: string) => void;
};

const useStore = create<IStore>((set) => ({
  cartId: undefined,
  setCartId: (cartId) =>
    set({
      cartId,
    }),
}));

const getElseCreateCart = async ({
  cartId,
  setCartId,
}: {
  cartId?: string;
  setCartId: (checkoutId: string) => void;
}) => {
  if (cartId) {
    return commerce.checkout.get(cartId);
  }

  const cart = await commerce.checkout.create();

  setCartId(cart.cartId);

  return cart;
};

export const useShoppingCart = () => {
  const { cartId, setCartId } = useStore();

  const cartQuery = useQuery(["cart", cartId], () =>
    getElseCreateCart({ cartId, setCartId })
  );

  const addItem = (lineItem: ILineItem) => {
    return;
  };

  return {
    cartQuery,
  };
};
