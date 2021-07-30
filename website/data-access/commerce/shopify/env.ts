export const getStorefrontAccessToken = () => {
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (token) {
    return token;
  }

  throw new Error(
    `process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is undefined`
  );
};

export const getShopDomain = () => {
  const domain = process.env.NEXT_PUBLIC_SHOP_DOMAIN;

  if (domain) {
    return domain;
  }

  throw new Error(`process.env.NEXT_PUBLIC_SHOP_DOMAIN is undefined`);
};
