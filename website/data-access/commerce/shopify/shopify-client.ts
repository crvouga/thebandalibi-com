import ShopifyBuy from "shopify-buy";
import { getShopDomain, getStorefrontAccessToken } from "./env";

export const ShopifyClient = () => {
  const shopifyClient = ShopifyBuy.buildClient({
    domain: getShopDomain(),
    storefrontAccessToken: getStorefrontAccessToken(),
  });

  return shopifyClient;
};
