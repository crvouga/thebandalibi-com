import { ICommerce } from "../interface";
import { CommerceCheckout } from "./commerce.checkout";
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
    checkout: CommerceCheckout({ shopifyClient }),
  };
};
