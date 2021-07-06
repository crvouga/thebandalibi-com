import { INaturalNumber } from "@utility";

export const DEFAULT_CURRENCY_CODE = "USD";

type IImage = {
  src: string;
  alt: string;
};

export type IPrice = {
  amount: number;
  currencyCode: string;
};

export type IProductOption = {
  name: string;
  value: string;
};

export type IProductVariant = {
  productId: string;
  variantId: string;
  name: string;
  price: IPrice;
  image: IImage;
  selectedOptions: IProductOption[];
};

export type IProduct = {
  productId: string;
  name: string;
  descriptionHTML: string;
  thumbnail: IImage;
  images: IImage[];
  variants: IProductVariant[];
};

export type ILineItem = {
  productName: string;
  variantName: string;
  lineItemId: string;
  image: IImage;
  variantId: string;
  productId: string;
  quantity: INaturalNumber;
  price: IPrice;
};

export type ILineItemUpdate = {
  lineItemId: string;
  quantity: INaturalNumber;
};

export type ILineItemAdd = {
  variantId: string;
  quantity: INaturalNumber;
};

export type ICart = {
  cartId: string;
  lineItems: ILineItem[];
};

export type ICommerce = {
  products: {
    getOne({ productId }: { productId: string }): Promise<IProduct>;
    getAll(): Promise<IProduct[]>;
    getRelated({ productId }: { productId: string }): Promise<IProduct[]>;
  };

  cart: {
    get(cartId: string): Promise<ICart>;
    create(): Promise<ICart>;
    remove(cartId: string, lineItemIds: string[]): Promise<ICart>;
    update(cartId: string, updates: ILineItemUpdate[]): Promise<ICart>;
    add(cartId: string, lineItems: ILineItemAdd[]): Promise<ICart>;
  };
};
