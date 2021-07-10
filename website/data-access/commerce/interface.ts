export const DEFAULT_CURRENCY_CODE = "USD";
export const CART_ITEM_QUANTITY_UPPER_BOUND = 10; // just in case

export type ILineItemQuantity = number & { type: "LineItemQuantity" };

export const LineItemQuantity = (unknownQuantity: unknown) => {
  const quantity = typeof unknownQuantity === "number" ? unknownQuantity : 0;

  return Math.max(
    0,
    Math.min(CART_ITEM_QUANTITY_UPPER_BOUND, quantity)
  ) as ILineItemQuantity;
};

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
  quantity: ILineItemQuantity;
  price: IPrice;
};

export type ILineItemUpdate = {
  lineItemId: string;
  quantity: ILineItemQuantity;
};

export type ILineItemAdd = {
  variantId: string;
  quantity: ILineItemQuantity;
};

export type ICart = {
  checkoutUrl: string;
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
