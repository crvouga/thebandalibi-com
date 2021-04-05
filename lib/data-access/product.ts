import {
  IPrintfulClient,
  IPrintfulSyncProduct,
  IPrintfulSyncProductInfo,
  IPrintfulSyncVaraint,
} from "../printful/printful-client";
import { toMax, toMin } from "../utility";

export type IProduct = {
  id: string;
  name: string;
  thumbnailUrl: string;
};

type IProductVariant = {
  image: string;
  name: string;
};

export type IVariant = {
  id: number;
  name: string;
  retailPrice: number;
  currency: string;
  product: IProductVariant;
  sku: string;
};

export type IProductInfo = {
  product: IProduct;
  variants: IVariant[];
};

const printfulProductToProduct = (data: IPrintfulSyncProduct): IProduct => {
  return {
    id: data.id,
    name: data.name,
    thumbnailUrl: data.thumbnail_url,
  };
};

const printfulVariantToProductVariant = (
  data: IPrintfulSyncVaraint
): IVariant => {
  return {
    id: data.id,
    name: data.name,
    retailPrice: data.retail_price,
    currency: data.currency,
    sku: data.sku,
    product: {
      image: data.product.image,
      name: data.product.name,
    },
  };
};

export const productInfoToPriceRange = (projectInfo: IProductInfo) => {
  const prices = projectInfo.variants.map((_) => _.retailPrice);

  return {
    lower: toMin(prices),
    upper: toMax(prices),
    currency: projectInfo.variants[0].currency,
  };
};

const printfulProductInfoToProductInfo = (
  data: IPrintfulSyncProductInfo
): IProductInfo => {
  return {
    product: printfulProductToProduct(data.sync_product),
    variants: data.sync_variants.map(printfulVariantToProductVariant),
  };
};

export const ProductDataStore = (printfulClient: IPrintfulClient) => {
  return {
    async getAll() {
      const data = await printfulClient.store.products.getAll();
      return data.result.map(printfulProductToProduct);
    },

    async getInfo(id: string) {
      const data = await printfulClient.store.products.getOne(id);
      return printfulProductInfoToProductInfo(data.result);
    },
  };
};
