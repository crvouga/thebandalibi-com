import { Commerce } from "./commerce";
import { ShopifyClient } from "./shopify-client";

export * from "./env";

const shopifyClient = ShopifyClient();

const DEFAULT_PAGE_SIZE = 20;

export const commerce = Commerce({
  shopifyClient,
  pageSize: DEFAULT_PAGE_SIZE,
});
