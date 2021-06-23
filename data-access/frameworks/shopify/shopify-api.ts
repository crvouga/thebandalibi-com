const SHOP = "the-band-alibi-merch";
const CLIENT_ID = "";

export const toShopifyUrl = ({
  shop,
  client_id,
}: {
  shop: string;
  client_id: string;
}) => {
  return `https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${client_id}&scope=unauthenticated_read_product_listings,unauthenticated_write_checkouts,unauthenticated_write_customers,unauthenticated_read_customer_tags,unauthenticated_read_content,unauthenticated_read_product_tags&redirect_uri=https://www.google.com/&state=nonce1`;
};

const SHOPIFY_STOREFRONT_HTTP_HEADER = `X-Shopify-Storefront-Access-Token`;
