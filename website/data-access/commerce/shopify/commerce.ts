import { ICommerce } from "../interface";
import { CommerceCart } from "./commerce.cart";
import { CommerceProducts } from "./commerce.products";

export const Commerce = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: ShopifyBuy.Client;
  pageSize: number;
}): ICommerce => {
  return {
    products: CommerceProducts({ shopifyClient, pageSize }),
    cart: CommerceCart({ shopifyClient }),
  };
};
