import { NaturalNumber } from "@utility";
import { ICart, ICommerce, ILineItem } from "../interface";
import { removeLineItems } from "../utility";
const toLineItem = (lineItem: ShopifyBuy.LineItem): ILineItem => {
  if (!lineItem) {
    throw new Error(`invalid line item data`);
  }

  //@ts-ignore
  const variant = lineItem.variant;

  if (!variant) {
    console.error(lineItem);
    throw new Error(`failed to get variant for line item`);
  }

  //@ts-ignore
  const product = variant.product;

  if (!product) {
    console.error(lineItem);
    throw new Error("failed to get product for line item");
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
    quantity: NaturalNumber(lineItem.quantity),
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

      return cart;
    },

    async remove(cartId, lineItemIds) {
      const result = await shopifyClient.checkout.removeLineItems(
        cartId,
        lineItemIds
      );

      const cart = toCart(result);

      const prediction = removeLineItems(cart, lineItemIds);

      return prediction;
    },
  };
};
