import { commerce } from "@data-access";
import { differenceWith, IPromiseValue, usePersistedState } from "@utility";
import { ICart } from "data-access/commerce";
import { useMutation, useQuery, useQueryClient } from "react-query";

const CART_ID_KEY = "CART_ID";

const toCartQueryKey = ({ cartId }: { cartId: string | null }) => {
  return `cart ${cartId}`;
};

export const useCartQuery = () => {
  const [cartId, setCartId] = usePersistedState<string | null>(
    CART_ID_KEY,
    null
  );

  return useQuery(toCartQueryKey({ cartId }), async () => {
    if (cartId) {
      return commerce.cart.get(cartId);
    }

    const cart = await commerce.cart.create();

    setCartId(cart.cartId);

    return cart;
  });
};

const useSetCartData = () => {
  const queryClient = useQueryClient();

  return (cart: ICart) => {
    queryClient.setQueryData(toCartQueryKey({ cartId: cart.cartId }), cart);
  };
};

export const useCartAddItems = () => {
  const cartQuery = useCartQuery();

  const setCartData = useSetCartData();

  const mutation = useMutation(
    async (params: Parameters<typeof commerce.cart.add>[1]) => {
      if (cartQuery.data?.cartId) {
        return commerce.cart.add(cartQuery.data.cartId, params);
      }

      throw new Error("Cart is not loaded");
    },
    {
      onSuccess: (newCart) => {
        setCartData(newCart);
      },
      onSettled: () => {
        cartQuery.refetch();
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
  const cart = useCartQuery();
  const setCartData = useSetCartData();

  const mutation = useMutation(
    async (variables: Parameters<typeof commerce.cart.remove>[1]) => {
      if (cart.data?.cartId) {
        return commerce.cart.remove(cart.data.cartId, variables);
      }

      throw new Error("Cart is not loaded");
    },
    {
      onSuccess: (nextCart) => {
        setCartData(nextCart);
      },

      onSettled: () => {
        cart.refetch();
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
