import { PrintfulApi } from "./printful-api";
import {
  IPrintfulPaginationResponse,
  IPrintfulResponse,
  IPrintfulStoreData,
  IPrintfulSyncProduct,
  IPrintfulSyncProductInfo,
} from "./printful-data";

export const PrintfulClient = () => {
  const printfulApi = PrintfulApi();

  return {
    store: {
      async get() {
        const { data } = await printfulApi.get<
          IPrintfulResponse<IPrintfulStoreData>
        >("/store");
        return data;
      },
      products: {
        async getOne(id: string) {
          const { data } = await printfulApi.get<
            IPrintfulResponse<IPrintfulSyncProductInfo>
          >(`/store/products/${id}`);

          return data;
        },

        async getAll() {
          const { data } = await printfulApi.get<
            IPrintfulPaginationResponse<IPrintfulSyncProduct>
          >("/store/products");

          return data;
        },
      },
    },
  };
};

export type IPrintfulClient = ReturnType<typeof PrintfulClient>;
