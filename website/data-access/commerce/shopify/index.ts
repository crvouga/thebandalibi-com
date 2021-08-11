import ShopifyBuy from "shopify-buy";
import { Commerce } from "./commerce";
import { getShopDomain, getStorefrontAccessToken } from "./env";
import { Legal } from "./legal";

const shopifyClient = ShopifyBuy.buildClient({
  domain: getShopDomain(),
  storefrontAccessToken: getStorefrontAccessToken(),
});

const DEFAULT_PAGE_SIZE = 20;

export const commerce = Commerce({
  shopifyClient,
  pageSize: DEFAULT_PAGE_SIZE,
});

export const legal = Legal({
  shopifyClient,
});
