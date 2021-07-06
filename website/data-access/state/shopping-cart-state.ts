import { commerce } from "@data-access";
import { usePersistedState } from "@utility";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useCartId = () => {
  return usePersistedState<string | null>("THE_BAND_ALIBI_CART_ID", null);
};

const toCartQueryKey = ({ cartId }: { cartId?: string | null }) => {
  return ["cart", cartId ?? ""].join("/");
};

export const useCartQuery = () => {
  const [cartId, setCartId] = useCartId();

  return useQuery(toCartQueryKey({ cartId }), async () => {
    if (cartId) {
      return commerce.cart.get(cartId);
    }

    const cart = await commerce.cart.create();

    setCartId(cart.cartId);

    return cart;
  });
};

export const useCartAddItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.add>[1];

  return useMutation(
    async (variables: IVariables) => {
      if (!cartQuery.data) {
        return null;
      }

      return commerce.cart.add(cartQuery.data.cartId, variables);
    },
    {
      onSuccess: (nextCart) => {
        if (!nextCart) {
          return;
        }

        queryClient.setQueryData(
          toCartQueryKey({ cartId: nextCart.cartId }),
          nextCart
        );
      },

      onSettled: () => {
        queryClient.invalidateQueries(
          toCartQueryKey({ cartId: cartQuery.data?.cartId })
        );
      },
    }
  );
};

export const useCartRemoveItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.remove>[1];

  return useMutation(
    async (variables: IVariables) => {
      if (!cartQuery.data) {
        return null;
      }

      return commerce.cart.remove(cartQuery.data.cartId, variables);
    },
    {
      onSuccess: (nextCart) => {
        if (!nextCart) {
          return;
        }

        queryClient.setQueryData(
          toCartQueryKey({ cartId: nextCart.cartId }),
          nextCart
        );
      },

      onSettled: () => {
        queryClient.invalidateQueries(
          toCartQueryKey({ cartId: cartQuery.data?.cartId })
        );
      },
    }
  );
};
