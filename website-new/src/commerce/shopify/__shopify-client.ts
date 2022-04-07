import ShopifyBuy from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOP_DOMAIN;

const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain) {
  throw new Error('process.env.NEXT_PUBLIC_SHOP_DOMAIN is undefined');
}

if (!storefrontAccessToken) {
  throw new Error(
    'process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is undefined',
  );
}

export const shopifyClient = ShopifyBuy.buildClient({
  domain,
  storefrontAccessToken,
});
