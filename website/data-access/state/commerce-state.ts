import { commerce, getShoppingCartStorageKey } from "@data-access";
import { usePersistedState } from "@utility";
import { ICartItemUpdate, updateCartItems } from "data-access/commerce";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDebouncedCallback } from "use-debounce";

const storageKey = getShoppingCartStorageKey();

const useCartId = () => {
  return usePersistedState<string | null>(storageKey, null);
};

const toCartKey = ({ cartId }: { cartId?: string | null }) => {
  return ["cart", cartId ?? ""];
};

export const useCartQuery = () => {
  const [cartId, setCartId] = useCartId();

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

export const useAddCartItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.add>[1];

  return useMutation({
    mutationFn: async (variables: IVariables) => {
      if (!cartQuery.data) {
        return null;
      }

      return commerce.cart.add(cartQuery.data.cartId, variables);
    },

    onSuccess: (nextCart) => {
      if (!nextCart) {
        return;
      }

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

export const useRemoveCartItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.remove>[1];

  return useMutation({
    mutationFn: async (variables: IVariables) => {
      if (!cartQuery.data) {
        return null;
      }

      return commerce.cart.remove(cartQuery.data.cartId, variables);
    },

    onSuccess: (nextCart) => {
      if (!nextCart) {
        return;
      }

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

export const useUpdateCartItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  const cart = cartQuery.data;

  const mutation = useMutation({
    mutationFn: async (cartItemUpdates: ICartItemUpdate[]) => {
      if (!cart) {
        return null;
      }

      return commerce.cart.update(cart.cartId, cartItemUpdates);
    },
  });

  const mutateDebounced = useDebouncedCallback((update: ICartItemUpdate) => {
    mutation.mutateAsync([update]);
  }, 1000 / 2);

  const mutateOverride = async (update: ICartItemUpdate) => {
    if (cart) {
      const optimistic = updateCartItems(cart, [update]);
      queryClient.setQueryData(toCartKey({ cartId: cart.cartId }), optimistic);
    }

    return mutateDebounced(update);
  };

  return {
    ...mutation,
    mutateAsync: mutateOverride,
    mutate: mutateOverride,
  };
};
