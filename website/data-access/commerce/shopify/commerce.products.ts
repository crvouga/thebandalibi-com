import {
  DEFAULT_CURRENCY_CODE,
  ICommerce,
  IPrice,
  IProduct,
  IProductOption,
  IProductVariant,
} from "../interface";

/* 

NOTE: shopify buy type definitions does not map directly to shopify buy return data

*/

const toOption = (shopifyOption: unknown): IProductOption => {
  //@ts-ignore
  const name = shopifyOption.name;
  //@ts-ignore
  const value = shopifyOption.value;

  if (typeof name === "string" && typeof value === "string") {
    return {
      name,
      value,
    };
  }

  throw new Error("failed to parse shopify option data");
};

const toSelectedOptions = (
  variant: ShopifyBuy.ProductVariant
): IProductOption[] => {
  //@ts-ignore
  const shopifySelectedOptions = variant.selectedOptions;

  if (!shopifySelectedOptions) {
    throw new Error("failed to parse shopify selected options data");
  }

  if (!Array.isArray(shopifySelectedOptions)) {
    throw new Error("failed to parse shopify selected options data");
  }

  return shopifySelectedOptions.map(toOption);
};

const toDescriptionHTML = (shopifyProduct: ShopifyBuy.Product): string => {
  //@ts-ignore
  const descriptionHTML = shopifyProduct.descriptionHtml;

  if (typeof descriptionHTML === "string") {
    return descriptionHTML;
  }

  throw new Error("failed to parse shopify product descriptionHTML");
};

const toPrice = (variant: ShopifyBuy.ProductVariant): IPrice => {
  //@ts-ignore
  const priceV2 = variant.priceV2;

  if (
    priceV2 &&
    typeof priceV2.amount === "string" &&
    typeof priceV2.currencyCode === "string"
  ) {
    return {
      amount: priceV2.amount,
      currencyCode: priceV2.currencyCode,
    };
  }

  console.warn(
    `Commerce module is assuming the currency code is ${DEFAULT_CURRENCY_CODE}`
  );

  return {
    amount: Number(variant.price),
    currencyCode: DEFAULT_CURRENCY_CODE,
  };
};

const toVariant = (variant: ShopifyBuy.ProductVariant): IProductVariant => {
  return {
    productId: String(variant.productId),
    variantId: String(variant.id),
    image: {
      src: variant.image.src,
      alt: variant.title,
    },
    name: variant.title,
    price: toPrice(variant),
    selectedOptions: toSelectedOptions(variant),
  };
};

const toProduct = (product: ShopifyBuy.Product): IProduct => {
  return {
    productId: String(product.id),
    name: product.title,
    thumbnail: {
      src: product.images[0].src,
      alt: product.title,
    },
    descriptionHTML: toDescriptionHTML(product),
    images: product.images.map((image) => ({
      src: image.src,
      alt: product.title,
    })),
    variants: product.variants.map(toVariant),
  };
};

export const CommerceProducts = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: ShopifyBuy.Client;
  pageSize: number;
}): ICommerce["products"] => {
  return {
    async getOne({ productId }: { productId: string }) {
      const result = await shopifyClient.product.fetch(productId);

      const product = toProduct(result);

      return product;
    },

    async getAll() {
      const results = await shopifyClient.product.fetchAll(pageSize);

      const products = results.map(toProduct);

      return products;
    },
  };
};
