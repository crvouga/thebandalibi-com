export const DEFAULT_CURRENCY_CODE = "USD";
export const CART_ITEM_QUANTITY_UPPER_BOUND = 10; // just in case

export type ICartItemQuantity = number & { type: "CartItemQuantity" };

export const CartItemQuantity = (unknownQuantity: unknown) => {
  const quantity = typeof unknownQuantity === "number" ? unknownQuantity : 1;

  return Math.max(
    1,
    Math.min(CART_ITEM_QUANTITY_UPPER_BOUND, quantity)
  ) as ICartItemQuantity;
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
  variantName: string;
  productName: string;
  price: IPrice;
  image: IImage;
  selectedOptions: IProductOption[];
};

export type IProduct = {
  productId: string;
  productName: string;
  descriptionHTML: string;
  thumbnail: IImage;
  images: IImage[];
  variants: IProductVariant[];
};

export type ICartItem = {
  productName: string;
  variantName: string;
  cartItemId: string;
  image: IImage;
  variantId: string;
  productId: string;
  quantity: ICartItemQuantity;
  price: IPrice;
};

export type ICartItemUpdate = {
  cartItemId: string;
  quantity: ICartItemQuantity;
};

export type ICartItemAdd = {
  variantId: string;
  quantity: ICartItemQuantity;
};

export type ICart = {
  checkoutUrl: string;
  cartId: string;
  items: ICartItem[];
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
    remove(cartId: string, cartItemIds: string[]): Promise<ICart>;
    update(cartId: string, updates: ICartItemUpdate[]): Promise<ICart>;
    add(cartId: string, additions: ICartItemAdd[]): Promise<ICart>;
  };
};

export type ILegalPages = {
  termsOfServiceHTML: string;
  refundPolicyHTML: string;
  privacyPolicyHTML: string;
  shippingPolicyHTML: string;
};

export type ILegal = {
  getPages(): Promise<ILegalPages>;
};
