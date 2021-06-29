import ShopifyBuy from "shopify-buy";

// keys: https://the-band-alibi-merch.myshopify.com/admin/apps/private/322456322237

const SHOP_DOMAIN = "the-band-alibi-merch.myshopify.com";

const getStorefrontAccessToken = () => {
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (token) {
    return token;
  }

  throw new Error(
    `process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is undefined`
  );
};

export type IShopifyClient = ShopifyBuy.Client;
export type IShopifyProduct = ShopifyBuy.Product;
export type IShopifyVariant = ShopifyBuy.ProductVariant;

export const ShopifyClient = (): IShopifyClient => {
  const shopifyClient = ShopifyBuy.buildClient({
    domain: SHOP_DOMAIN,
    storefrontAccessToken: getStorefrontAccessToken(),
  });

  return shopifyClient;
};
