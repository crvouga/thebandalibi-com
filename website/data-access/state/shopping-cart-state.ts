import { commerce } from "@data-access";
import { throttle, usePersistedState } from "@utility";
import { lineItemUpdatesToCart } from "data-access/commerce";
import { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useCartId = () => {
  return usePersistedState<string | null>("THE_BAND_ALIBI_CART_ID", null);
};

const toCartKey = ({ cartId }: { cartId?: string | null }) => {
  return ["cart", cartId ?? ""].join("/");
};

export const useCartQuery = () => {
  const [cartId, setCartId] = useCartId();

  return useQuery(toCartKey({ cartId }), async () => {
    if (cartId) {
      return commerce.cart.get(cartId);
    }

    const cart = await commerce.cart.create();

    setCartId(cart.cartId);

    return cart;
  });
};

export const useAddCartItems = () => {
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
          toCartKey({ cartId: nextCart.cartId }),
          nextCart
        );
      },

      onSettled: () => {
        queryClient.invalidateQueries(
          toCartKey({ cartId: cartQuery.data?.cartId })
        );
      },
    }
  );
};

export const useRemoveCartItems = () => {
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
          toCartKey({ cartId: nextCart.cartId }),
          nextCart
        );
      },

      onSettled: () => {
        queryClient.invalidateQueries(
          toCartKey({ cartId: cartQuery.data?.cartId })
        );
      },
    }
  );
};

export const useUpdateCartItems = () => {
  const cartQuery = useCartQuery();
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof commerce.cart.update>[1];

  const mutationRef = useRef(
    throttle({ wait: 3000 }, async (variables: IVariables) => {
      if (!cartQuery.data) {
        return null;
      }

      const nextCart = commerce.cart.update(cartQuery.data.cartId, variables);

      queryClient.invalidateQueries(
        toCartKey({ cartId: cartQuery.data?.cartId })
      );

      return nextCart;
    })
  );

  return useMutation(mutationRef.current, {
    onMutate: (lineItemUpdates) => {
      if (!cartQuery.data) {
        return;
      }

      const cart = cartQuery.data;

      const optimistic = lineItemUpdatesToCart(cart, lineItemUpdates);

      queryClient.setQueryData(
        toCartKey({ cartId: cartQuery.data.cartId }),
        optimistic
      );
    },
  });
};
