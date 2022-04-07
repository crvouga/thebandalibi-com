import {
  CartItemQuantity,
  ICart,
  ICartAdd,
  ICartCreate,
  ICartGet,
  ICartItem,
  ICartRemove,
  ICartUpdate,
} from '../commerce-interface';
import { shopifyClient } from './__shopify-client';

type IShopifyError = {
  message: string;
  locations: {
    line: number;
    column: number;
  }[];
  path: string[];
}[];

export const toError = (error: IShopifyError): Error[] => {
  if (error.length > 0) {
    return [new Error('Something went wrong')];
  }

  return [];
};

const toCartItem = (cartItem: ShopifyBuy.LineItem): ICartItem => {
  if (!cartItem) {
    throw new Error(`invalid item data`);
  }

  //@ts-ignore
  const variant = cartItem.variant;

  if (!variant) {
    console.error(cartItem);
    throw new Error(`failed to get variant for line item`);
  }

  //@ts-ignore
  const product = variant.product;

  if (!product) {
    console.error(cartItem);
    throw new Error('failed to get product for line item');
  }

  return {
    productName: product.title ?? cartItem.title,
    variantName: variant.title ?? cartItem.variantTitle,
    cartItemId: String(cartItem.id),
    image: {
      src: variant.image.src,
      alt: variant.title,
    },
    price: {
      amount: Number(variant.price),
      currencyCode: 'USD',
    },
    quantity: CartItemQuantity(cartItem.quantity),
    productId: String(product.id),
    variantId: String(variant.id),
  };
};

const toCheckoutUrl = (cart: ShopifyBuy.Cart): string => {
  const checkoutUrl = cart.checkoutUrl;

  if (typeof checkoutUrl === 'string') {
    return checkoutUrl;
  }

  //@ts-ignore
  const webUrl = cart.webUrl;

  if (typeof webUrl === 'string') {
    return webUrl;
  }

  throw new Error('failed to get checkout url');
};

const toCart = (cart: ShopifyBuy.Cart): ICart => {
  return {
    checkoutUrl: toCheckoutUrl(cart),
    cartId: String(cart.id),
    items: cart.lineItems.map(toCartItem),
  };
};

export const create: ICartCreate = async () => {
  const result = await shopifyClient.checkout.create();

  const cart = toCart(result);

  return cart;
};

export const get: ICartGet = async (cartId: string) => {
  const result = await shopifyClient.checkout.fetch(cartId);

  const cart = toCart(result);

  return cart;
};

export const add: ICartAdd = async (cartId, cartItems) => {
  const result = await shopifyClient.checkout.addLineItems(cartId, cartItems);

  const cart = toCart(result);

  const prediction: ICart = {
    ...cart,
  };

  return prediction;
};

export const update: ICartUpdate = async (cartId, updates) => {
  const result = await shopifyClient.checkout.updateLineItems(
    cartId,
    updates.map((update) => ({
      id: update.cartItemId,
      quantity: update.quantity,
    })),
  );

  const cart = toCart(result);

  return cart;
};

export const remove: ICartRemove = async (cartId, cartItemIds) => {
  const cart = await shopifyClient.checkout.removeLineItems(
    cartId,
    cartItemIds,
  );

  return toCart(cart);
};
