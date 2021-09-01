import { catchError, IError } from "@utility";
import { CartItemQuantity, ICart, ICartItem, ICommerce } from "../interface";

type IShopifyError = {
  message: string;
  locations: {
    line: number;
    column: number;
  }[];
  path: string[];
}[];

const toError = (error: IShopifyError): IError[] => {
  if (error.length > 0) {
    return [
      {
        message: "Something went wrong",
      },
    ];
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
    throw new Error("failed to get product for line item");
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
      currencyCode: "USD",
    },
    quantity: CartItemQuantity(cartItem.quantity),
    productId: String(product.id),
    variantId: String(variant.id),
  };
};

const toCheckoutUrl = (cart: ShopifyBuy.Cart): string => {
  const checkoutUrl = cart.checkoutUrl;

  if (typeof checkoutUrl === "string") {
    return checkoutUrl;
  }

  //@ts-ignore
  const webUrl = cart.webUrl;

  if (typeof webUrl === "string") {
    return webUrl;
  }

  throw new Error("failed to get checkout url");
};

const toCart = (cart: ShopifyBuy.Cart): ICart => {
  return {
    checkoutUrl: toCheckoutUrl(cart),
    cartId: String(cart.id),
    items: cart.lineItems.map(toCartItem),
  };
};

export const CommerceCart = ({
  shopifyClient,
}: {
  shopifyClient: ShopifyBuy.Client;
}): ICommerce["cart"] => {
  return {
    async create() {
      const result = await shopifyClient.checkout.create();

      const cart = toCart(result);

      return cart;
    },

    async get(cartId: string) {
      const result = await shopifyClient.checkout.fetch(cartId);

      const cart = toCart(result);

      return cart;
    },

    async add(cartId, cartItems) {
      const result = await shopifyClient.checkout.addLineItems(
        cartId,
        cartItems
      );

      const cart = toCart(result);

      const prediction: ICart = {
        ...cart,
      };

      return prediction;
    },

    async update(cartId, updates) {
      const result = await shopifyClient.checkout.updateLineItems(
        cartId,
        updates.map((update) => ({
          id: update.cartItemId,
          quantity: update.quantity,
        }))
      );

      const cart = toCart(result);

      return cart;
    },

    async remove(cartId, cartItemIds) {
      const [shopifyCart, shopifyError] = await catchError<
        IShopifyError,
        ShopifyBuy.Cart
      >(shopifyClient.checkout.removeLineItems(cartId, cartItemIds));

      return [
        shopifyCart ? toCart(shopifyCart) : null,
        shopifyError ? toError(shopifyError) : [],
      ];
    },
  };
};
