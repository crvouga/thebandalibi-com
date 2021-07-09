import { getShoppingCartStorageKey, commerce } from "@data-access";
import { indexBy, usePersistedState } from "@utility";
import { ILineItemUpdate, updateLineItems } from "data-access/commerce";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDebounce } from "use-debounce";

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
  const cart = cartQuery.data;
  const queryKey = toCartKey({ cartId: cart?.cartId });

  const [updates, setUpdates] = useState<ILineItemUpdate[]>([]);
  const [debouncedUpdates] = useDebounce(updates, 1000);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (lineItemUpdates: ILineItemUpdate[]) => {
      if (cart) {
        return commerce.cart.update(cart.cartId, lineItemUpdates);
      }

      return null;
    },
  });

  const mutationKey = debouncedUpdates
    .map((update) => [update.lineItemId, update.quantity].join(" "))
    .join(" ");

  useEffect(() => {
    if (debouncedUpdates.length > 0) {
      mutation.mutate(debouncedUpdates);
    }
  }, [mutationKey]);

  const mutate = async (newUpdates: ILineItemUpdate[]) => {
    if (cart) {
      queryClient.setQueryData(queryKey, updateLineItems(cart, newUpdates));
    }

    setUpdates((updates) =>
      Object.values(
        indexBy((update) => update.lineItemId, [...updates, ...newUpdates])
      )
    );
  };

  return {
    status: mutation.status,
    mutate,
  };
};
