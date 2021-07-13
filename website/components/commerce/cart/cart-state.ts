import { commerce, getShoppingCartStorageKey } from "@data-access";
import { usePersistedState } from "@utility";
import constate from "constate";
import { ICart, ICartItemUpdate, updateCartItems } from "data-access/commerce";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDebouncedCallback } from "use-debounce";

const storageKey = getShoppingCartStorageKey();

export const [CartIdContext, useCartIdContext] = constate(() => {
  const [cartId, setCartId] = usePersistedState<string | null>(
    storageKey,
    null
  );

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
