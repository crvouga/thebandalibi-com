import { PrintfulApi } from "./printful-api";

// types copyed from: //https://www.printful.com/docs

type IPrintfulAddress = {
  name: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state_code: string;
  state_name: string;
  country_code: string;
  country_name: string;
  zip: string;
  phone: string;
  email: string;
};

type IPrintfulCardInfo = {
  type: string;
  number_mask: string;
  expires: string;
};

type IPrintfulPackingSlip = {
  email: string;
  phone: string;
  message: string;
};

//https://www.printful.com/docs/store
type IPrintfulStoreData = {
  id: number;
  name: string;
  website: string;
  return_address: IPrintfulAddress;
  billing_address: IPrintfulAddress;
  currency: string;
  payment_card: IPrintfulCardInfo;
  packing_slip: IPrintfulPackingSlip;
  type: string;
  created: string;
};

//https://www.printful.com/docs/products
export type IPrintfulSyncProduct = {
  id: string;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
};

type IPrintfulProductVariant = {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
};

type IPrintfulFileOption = {
  id: string;
  value: string | number;
};

type IPrintfulFile = {
  id: number;
  type: string;
  hash: string;
  url: string;
  filename: string;
  mime_type: string;
  size: number;
  width: number;
  height: number;
  dpi: number;
  status: "ok" | "waitng" | "failed";
  created: string;
  thumbnail_url: string;
  preview_url: string;
  visible: boolean;
  options: IPrintfulFileOption[];
};

type IPrintfulItemOption = {
  id: string;
  value: string | number;
};

export type IPrintfulSyncVaraint = {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  warehouse_product_variant_id: number;
  retail_price: number;
  sku: string;
  currency: string;
  is_ignored: boolean;
  product: IPrintfulProductVariant;
  files: IPrintfulFile[];
  options: IPrintfulItemOption[];
};

export type IPrintfulSyncProductInfo = {
  sync_product: IPrintfulSyncProduct;
  sync_variants: IPrintfulSyncVaraint[];
};

type IPrintfulResponse<TResult> = {
  code: number;
  result: TResult;
};

type IPrintfulPaging = {
  total: number;
  offset: number;
  limit: number;
};

type IPrintfulPaginationResponse<TResult> = {
  code: number;
  result: TResult[];
  paging: IPrintfulPaging;
};

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

export const printfulClient = PrintfulClient();
