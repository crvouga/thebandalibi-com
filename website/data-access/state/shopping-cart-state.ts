import { commerce } from "@data-access";
import { differenceWith, IPromiseValue, usePersistedState } from "@utility";
import { useMutation, useQuery, useQueryClient } from "react-query";

const CART_ID_KEY = "CART_ID";

const toCartQueryKey = ({ cartId }: { cartId: string | null }) => {
  return `cart ${cartId}`;
};

export const useCart = () => {
  const [cartId, setCartId] = usePersistedState<string | null>(
    CART_ID_KEY,
    null
  );

  const getElseCreateCart = async () => {
    if (cartId) {
      return commerce.cart.get(cartId);
    }

    const cart = await commerce.cart.create();

    setCartId(cart.cartId);

    return cart;
  };

  const queryKey = toCartQueryKey({ cartId });

  const query = useQuery(queryKey, getElseCreateCart);

  const queryClient = useQueryClient();

  const setData = (
    cart: IPromiseValue<ReturnType<typeof getElseCreateCart>> | undefined
  ) => {
    console.log(cart);
    queryClient.setQueryData(queryKey, cart);
  };

  return {
    ...query,
    setData,
  };
};

export const useCartAddItems = () => {
  const cart = useCart();

  const addItems = async (params: Parameters<typeof commerce.cart.add>[1]) => {
    if (cart.data?.cartId) {
      return commerce.cart.add(cart.data.cartId, params);
    }

    throw new Error("Cart is not loaded");
  };

  return useMutation(addItems, {
    onSuccess: (newCart) => {
      cart.setData(newCart);
    },
    onSettled: () => {
      cart.refetch();
    },
  });
};

export const useCartRemoveItems = () => {
  const cart = useCart();

  const removeItems = async (
    variables: Parameters<typeof commerce.cart.remove>[1]
  ) => {
    if (cart.data?.cartId) {
      return commerce.cart.remove(cart.data.cartId, variables);
    }

    throw new Error("Cart is not loaded");
  };

  const mutation = useMutation(removeItems, {
    onSuccess: (nextCart) => {
      cart.setData(nextCart);
    },

    onSettled: () => {
      cart.refetch();
    },
  });

  return {
    variables: mutation.variables,
    status: mutation.status,

    async mutate(params: Parameters<typeof commerce.cart.remove>[1]) {
      if (mutation.status === "loading") {
        return;
      }

      return await mutation.mutateAsync(params);
    },
  };
};
