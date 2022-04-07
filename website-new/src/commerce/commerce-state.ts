import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Commerce } from './commerce';
import { CartItemQuantity, ICart, ICartItemUpdate } from './commerce-interface';

const CART_KEY = 'thebandalibicart';

const toCartKey = ({ cartId }: { cartId?: string | null }) => {
  return ['cart', cartId ?? ''];
};

const useCartId = () => {
  const [cartId, setCartId] = useState<string | null>(
    localStorage.getItem(CART_KEY) ?? null,
  );

  useEffect(() => {
    if (cartId) {
      localStorage.setItem(CART_KEY, cartId);
    }
  }, [cartId]);

  return {
    cartId,
    setCartId,
  };
};

export const useCartQuery = () => {
  const { cartId } = useCartId();

  return useQuery(toCartKey({ cartId }), () => Commerce.Cart.get(cartId), {});
};

export const useCreateCart = () => {
  const { setCartId } = useCartId();

  return useMutation({
    mutationFn: async () => {
      const created = await Commerce.Cart.create();

      setCartId(created.cartId);

      return created;
    },
  });
};

export const useAddCartItems = ({ cart }: { cart?: ICart }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: Parameters<typeof Commerce.Cart.add>[1]) => {
      if (cart) {
        return Commerce.Cart.add(cart.cartId, variables);
      }
      throw new Error('Try to add item to an undefined cart');
    },

    onSuccess: (nextCart) => {
      queryClient.setQueryData(
        toCartKey({ cartId: nextCart.cartId }),
        nextCart,
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries('cart');
    },
  });
};

export const useRemoveCartItems = ({ cart }: { cart: ICart }) => {
  const queryClient = useQueryClient();

  type IVariables = Parameters<typeof Commerce.Cart.remove>[1];

  return useMutation({
    mutationFn: async (variables: IVariables) => {
      return Commerce.Cart.remove(cart.cartId, variables);
    },

    onSuccess: (result) => {
      if (result) {
        queryClient.setQueryData(toCartKey({ cartId: result.cartId }), result);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries('cart');
    },
  });
};

export const useUpdateCartItems = ({ cart }: { cart: ICart }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartItemUpdates: ICartItemUpdate[]) => {
      return Commerce.Cart.update(cart.cartId, cartItemUpdates);
    },
    onSuccess: (nextCart) => {
      queryClient.setQueryData(
        toCartKey({ cartId: nextCart.cartId }),
        nextCart,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries('cart');
    },
  });
};

export const useCartQuantityState = (initial: number) => {
  const [quantity, setQuantity] = useState(CartItemQuantity(initial));

  const onIncrement = () => {
    setQuantity((quantity) => CartItemQuantity(quantity + 1));
  };

  const onDecrement = () => {
    setQuantity((quantity) => CartItemQuantity(quantity - 1));
  };

  return {
    quantity,
    onIncrement,
    onDecrement,
    setQuantity: (quantity: number) => {
      setQuantity(CartItemQuantity(quantity));
    },
  };
};
