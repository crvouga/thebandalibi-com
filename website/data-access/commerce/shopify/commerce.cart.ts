import { differenceWith } from "@utility";
import { ICart, ICommerce, ILineItem } from "../interface";

const toLineItem = (lineItem: ShopifyBuy.LineItem): ILineItem => {
  //@ts-ignore
  const variant = lineItem.variant;

  if (!variant) {
    throw new Error("failed to cast line item");
  }

  //@ts-ignore
  const product = variant.product;

  if (!product) {
    throw new Error("failed to cast line item");
  }

  return {
    productName: product.title ?? lineItem.title,
    variantName: variant.title ?? lineItem.variantTitle,
    lineItemId: String(lineItem.id),
    image: {
      src: variant.image.src,
      alt: variant.title,
    },
    price: {
      amount: Number(variant.price),
      currencyCode: "USD",
    },
    quantity: lineItem.quantity,
    productId: String(product.id),
    variantId: String(variant.id),
  };
};

const toCart = (cart: ShopifyBuy.Cart): ICart => {
  return {
    cartId: String(cart.id),
    lineItems: cart.lineItems.map(toLineItem),
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

    async add(cartId, lineItems) {
      const result = await shopifyClient.checkout.addLineItems(
        cartId,
        lineItems
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
          id: update.lineItemId,
          quantity: update.quantity,
        }))
      );

      const cart = toCart(result);

      const prediction: ICart = {
        ...cart,
      };

      return prediction;
    },

    async remove(cartId, lineItemIds) {
      const result = await shopifyClient.checkout.removeLineItems(
        cartId,
        lineItemIds
      );

      const cart = toCart(result);

      const prediction: ICart = {
        ...cart,
        lineItems: differenceWith(
          (lineItem, lineItemId) => lineItem.lineItemId === lineItemId,
          cart.lineItems,
          lineItemIds
        ),
      };

      return prediction;
    },
  };
};
