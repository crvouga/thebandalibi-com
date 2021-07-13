import { commerce, getShoppingCartStorageKey } from "@data-access";
import constate from "constate";
import { ICart, ICartItemUpdate } from "data-access/commerce";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const [CartIdContext, useCartIdContext] = constate(() => {
  const [cartId, setCartId] = useState<string | null>(
    cookie.get(getShoppingCartStorageKey()) ?? null
  );

  useEffect(() => {
    if (cartId) {
      cookie.set(getShoppingCartStorageKey(), cartId);
    }
  }, [cartId]);

  return {
    cartId,
    setCartId,
  };
});

const toCartKey = ({ cartId }: { cartId?: string | null }) => {
  return ["cart", cartId ?? ""];
};

export const useCartQuery = () => {
  const { cartId, setCartId } = useCartIdContext();

  return useQuery(
    toCartKey({ cartId }),
    async () => {
      if (cartId) {
        const got = await commerce.cart.get(cartId);

        return got;
      }

      const created = await commerce.cart.create();

      setCartId(created.cartId);

      return created;
    },
    {}
  );
};

export const useCreateCart = () => {
  const { setCartId } = useCartIdContext();

  return useMutation({
    mutationFn: async () => {
      const created = await commerce.cart.create();

      setCartId(created.cartId);

      return created;
    },
  });
};

export const useAddCartItems = ({ cart }: { cart: ICart }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: Parameters<typeof commerce.cart.add>[1]) => {
      return commerce.cart.add(cart.cartId, variables);
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

  return useMutation({
    mutationFn: async (
      variables: Parameters<typeof commerce.cart.remove>[1]
    ) => {
      return commerce.cart.remove(cart.cartId, variables);
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
