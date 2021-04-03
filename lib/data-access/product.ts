import { IPrintfulClient } from "./printful-client";

export type IProduct = {
  id: string;
  name: string;
  thumbnailUrl: string;
};

export type IProductDataStore = {
  getAll(): Promise<IProduct[]>;
};

export const ProductDataStore = (
  printfulClient: IPrintfulClient
): IProductDataStore => {
  return {
    async getAll() {
      const printfulData = await printfulClient.store.products.getAll();

      return printfulData.result.map((result) => ({
        id: result.id,
        name: result.name,
        thumbnailUrl: result.thumbnail_url,
      }));
    },
  };
};
