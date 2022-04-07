import ShopifyBuy from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOP_DOMAIN;

const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const shopifyClient = ShopifyBuy.buildClient({
  domain,
  storefrontAccessToken,
});
