import { commerce } from "@data-access";
import constate from "constate";
import { ICart, ICartItemUpdate } from "data-access/commerce";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const CART_KEY = "thebandalibicart";

const toCartKey = ({ cartId }: { cartId?: string | null }) => {
  return ["cart", cartId ?? ""];
};

export const [CartStateContext, useCartStateContext] = constate(() => {
  const [cartId, setCartId] = useState<string | null>(
    cookie.get(CART_KEY) ?? null
  );

  useEffect(() => {
    if (cartId) {
      cookie.set(CART_KEY, cartId);
    }
  }, [cartId]);

  const queryClient = useQueryClient();

  const resetCart = () => {
    queryClient.invalidateQueries("cart");
    setCartId(null);
  };

  const getElseCreateCart = async () => {
    if (cartId) {
      const got = await commerce.cart.get(cartId);

      return got;
    }

    const created = await commerce.cart.create();

    setCartId(created.cartId);

    return created;
  };

  return {
    cartId,
    setCartId,
    resetCart,
    getElseCreateCart,
  };
});

export const useCartQuery = () => {
  const { cartId, getElseCreateCart } = useCartStateContext();

  return useQuery(toCartKey({ cartId }), getElseCreateCart, {});
};

export const useCreateCart = () => {
  const { setCartId } = useCartStateContext();

  return useMutation({
    mutationFn: async () => {
      const created = await commerce.cart.create();

      setCartId(created.cartId);

      return created;
    },
  });
};

export const useAddCartItems = ({ cart }: { cart?: ICart }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: Parameters<typeof commerce.cart.add>[1]) => {
      if (cart) {
        return commerce.cart.add(cart.cartId, variables);
      }
      throw new Error("Try to add item to an undefined cart");
    },

    onSuccess: (nextCart) => {
      queryClient.setQueryData(
        toCartKey({ cartId: nextCart.cartId }),
        nextCart
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useRemoveCartItems = ({ cart }: { cart: ICart }) => {
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.remove>[1];

  return useMutation({
    mutationFn: async (variables: IVariables) => {
      return commerce.cart.remove(cart.cartId, variables);
    },

    onSuccess: (result) => {
      const [cart, errors] = result;
      if (cart) {
        queryClient.setQueryData(toCartKey({ cartId: cart.cartId }), cart);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useUpdateCartItems = ({ cart }: { cart: ICart }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartItemUpdates: ICartItemUpdate[]) => {
      return commerce.cart.update(cart.cartId, cartItemUpdates);
    },
    onSuccess: (nextCart) => {
      queryClient.setQueryData(
        toCartKey({ cartId: nextCart.cartId }),
        nextCart
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};

export const useCartQuantity = () => {};
