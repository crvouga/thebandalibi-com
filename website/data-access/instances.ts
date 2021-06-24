import { Commerce } from "./commerce";
import { Content } from "./content";
import { SanityClient, ShopifyClient } from "./third-party-services";

const sanityClient = SanityClient();

export const content = Content({
  sanityClient,
});

const shopifyClient = ShopifyClient();

export const commerce = Commerce({
  shopifyClient,
  pageSize: 20,
});
