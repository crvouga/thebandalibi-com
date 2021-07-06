import { commerce } from "@data-access";
import { usePersistedState } from "@utility";
import { ICart } from "data-access/commerce";
import { useMutation, useQuery, useQueryClient } from "react-query";

const CART_ID_KEY = "CART_ID";

const useCartId = () => {
  return usePersistedState<string | null>(CART_ID_KEY, null);
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

const useCartData = () => {
  const queryClient = useQueryClient();

  const set = (cart: ICart) => {
    queryClient.setQueryData(toCartQueryKey({ cartId: cart.cartId }), cart);
  };

  const invalidate = (cartId?: string) => {
    queryClient.invalidateQueries(toCartQueryKey({ cartId }));
  };

  return {
    set,
    invalidate,
  };
};

export const useCartAddItems = () => {
  const cartQuery = useCartQuery();
  const cartData = useCartData();

  const mutation = useMutation(
    async (params: Parameters<typeof commerce.cart.add>[1]) => {
      if (cartQuery.data?.cartId) {
        return commerce.cart.add(cartQuery.data.cartId, params);
      }

      throw new Error("Cart is not loaded");
    },
    {
      onSuccess: (nextCart) => {
        cartData.set(nextCart);
      },
      onSettled: () => {
        cartData.invalidate(cartQuery.data?.cartId);
      },
    }
  );

  return {
    variables: mutation.variables,
    status: mutation.status,
    async mutate(params: Parameters<typeof mutation.mutateAsync>[0]) {
      if (mutation.status === "loading") {
        return;
      }

      return await mutation.mutateAsync(params);
    },
  };
};

export const useCartRemoveItems = () => {
  const cartQuery = useCartQuery();
  const cartData = useCartData();

  const mutation = useMutation(
    async (variables: Parameters<typeof commerce.cart.remove>[1]) => {
      if (cartQuery.data?.cartId) {
        return commerce.cart.remove(cartQuery.data.cartId, variables);
      }

      throw new Error("Cart is not loaded");
    },
    {
      onSuccess: (nextCart) => {
        cartData.set(nextCart);
      },

      onSettled: () => {
        cartData.invalidate(cartQuery.data?.cartId);
      },
    }
  );

  return {
    variables: mutation.variables,
    status: mutation.status,
    async mutate(params: Parameters<typeof mutation.mutateAsync>[0]) {
      if (mutation.status === "loading") {
        return;
      }

      return mutation.mutateAsync(params);
    },
  };
};
