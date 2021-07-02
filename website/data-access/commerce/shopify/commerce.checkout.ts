import { ICart, ICommerce, ILineItem } from "../interface";

const toLineItem = (lineItem: ShopifyBuy.LineItem): ILineItem => {
  return {
    title: lineItem.title,
    lineItemId: String(lineItem.id),
    image: {
      src: lineItem.image.src,
      alt: lineItem.title,
    },
    quantity: lineItem.quantity,
    productId: String(lineItem.productId),
    variantId: String(lineItem.variantId),
  };
};

const toCart = (cart: ShopifyBuy.Cart): ICart => {
  return {
    cartId: String(cart.id),
    lineItems: cart.lineItems.map(toLineItem),
  };
};

export const CommerceCheckout = ({
  shopifyClient,
}: {
  shopifyClient: ShopifyBuy.Client;
}): ICommerce["checkout"] => {
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
  };
};
