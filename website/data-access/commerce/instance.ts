import { Commerce } from "./commerce";
import { ShopifyClient } from "./shopify";

const shopifyClient = ShopifyClient();

export const commerce = Commerce({
  shopifyClient,
  pageSize: 20,
});
