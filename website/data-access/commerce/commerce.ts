import {
  IPrice,
  ICommerce,
  IProductOption,
  IProduct,
  IProductVariant,
} from "./interface";
import { IShopifyClient, IShopifyProduct, IShopifyVariant } from "./shopify";

/* 

NOTE: shopify buy type definitions does not map directly to shopify buy return data

*/

const toImage = ({ src }: { src: string }) => {
  return {
    src,
  };
};

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

const toSelectedOptions = (variant: IShopifyVariant): IProductOption[] => {
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

const toDescriptionHTML = (shopifyProduct: IShopifyProduct): string => {
  //@ts-ignore
  const descriptionHTML = shopifyProduct.descriptionHtml;

  if (typeof descriptionHTML === "string") {
    return descriptionHTML;
  }

  throw new Error("failed to parse shopify product descriptionHTML");
};

const DEFAULT_CURRENCY_CODE = "USD";

const toPrice = (variant: IShopifyVariant): IPrice => {
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
    amount: variant.price,
    currencyCode: DEFAULT_CURRENCY_CODE,
  };
};

const toVariant = (variant: IShopifyVariant): IProductVariant => {
  return {
    variantId: String(variant.id),
    image: toImage(variant.image),
    name: variant.title,
    price: toPrice(variant),
    selectedOptions: toSelectedOptions(variant),
  };
};

const toProduct = (shopifyProduct: IShopifyProduct): IProduct => {
  return {
    productId: String(shopifyProduct.id),
    name: shopifyProduct.title,
    thumbnail: toImage(shopifyProduct.images[0]),
    descriptionHTML: toDescriptionHTML(shopifyProduct),
    images: shopifyProduct.images.map(toImage),
    variants: shopifyProduct.variants.map(toVariant),
  };
};

export const Commerce = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: IShopifyClient;
  pageSize: number;
}): ICommerce => {
  return {
    products: {
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
    },
  };
};
