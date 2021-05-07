import { toMax, toMin } from "../../../lib/utility";
import {
  IProduct,
  IProductDataStore,
  IProductInfo,
  IVariant,
} from "../../interface";
import {
  IPrintfulClient,
  IPrintfulSyncProduct,
  IPrintfulSyncProductInfo,
  IPrintfulSyncVaraint,
} from "../frameworks";

const printfulProductToProduct = (data: IPrintfulSyncProduct): IProduct => {
  return {
    id: data.id,
    name: data.name,
    thumbnailUrl: data.thumbnail_url,
    variantCount: data.variants,
  };
};

const printfulVariantToProductVariant = (
  data: IPrintfulSyncVaraint
): IVariant => {
  return {
    id: String(data.id),
    productId: String(data.sync_product_id),
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

export const ProductDataStorePrintful = (
  printfulClient: IPrintfulClient
): IProductDataStore => {
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
