import {
  differenceWith,
  average,
  equalBy,
  groupBy,
  minimumBy,
  sum,
  uniqueBy,
  maximumBy,
} from "@utility";
import {
  DEFAULT_CURRENCY_CODE,
  ICart,
  ICartItem,
  ICartItemUpdate,
  IPrice,
  IProduct,
  IProductOption,
  IProductVariant,
} from "./interface";

export const optionToString = (option: IProductOption) => {
  return [option.name, option.value].join(",");
};

export const productToOptionsByName = (
  product: IProduct
): { [name: string]: IProductOption[] } => {
  const allOptions = product.variants.flatMap(
    (variant) => variant.selectedOptions
  );

  const uniqueOptions = uniqueBy(
    (option) => `${option.name}${option.value}`,
    allOptions
  );

  const optionsByName = groupBy((option) => option.name, uniqueOptions);

  return optionsByName;
};

export const selectedOptionsToVariant = (
  product: IProduct,
  selectedOptions: IProductOption[]
): IProductVariant | null => {
  const variants = product.variants.filter((variant) =>
    variant.selectedOptions.every((selectedOption) =>
      selectedOptions.some((option) =>
        equalBy(optionToString, selectedOption, option)
      )
    )
  );

  return variants[0] ?? null;
};

const cartToCurrenyCode = (cart: ICart) => {
  const currenyCodes = uniqueBy(
    (x) => x,
    cart.items.map((cartItem) => cartItem.price.currencyCode)
  );

  if (currenyCodes.length === 0) {
    return "";
  }

  return currenyCodes[0];
};

export const cartToSubtotal = (cart: ICart) => {
  return {
    currencyCode: cartToCurrenyCode(cart),
    amount: sum(
      cart.items.map((cartItem) => cartItem.price.amount * cartItem.quantity)
    ),
  };
};

export const currencyCodeToSymbol: { [code: string]: string } = {
  USD: "$",
};

export const formatPrice = (price: IPrice) => {
  const currencySymbol = currencyCodeToSymbol[price.currencyCode];
  const amount = formatPriceAmount(price.amount);

  if (currencySymbol) {
    return `${currencySymbol}${amount}`;
  }

  return `${amount} ${price.currencyCode}`;
};

export const updateCartItems = (
  cart: ICart,
  updates: ICartItemUpdate[]
): ICart => {
  const cartItems = cart.items.map((cartItem) =>
    updates
      .filter((update) => update.cartItemId === cartItem.cartItemId)
      .reduce<ICartItem>(
        (cartItem, update) => ({ ...cartItem, ...update }),
        cartItem
      )
  );

  return {
    ...cart,
    items: cartItems,
  };
};

export const removeCartItems = (cart: ICart, cartItemIds: string[]): ICart => {
  const cartItems = differenceWith(
    (cartItem, cartItemId) => cartItem.cartItemId === cartItemId,
    cart.items,
    cartItemIds
  );

  return {
    ...cart,
    items: cartItems,
  };
};

export const cartToTotalQuantity = (cart: ICart) => {
  return sum(cart.items.map((cartItem) => cartItem.quantity));
};

export const productToPriceRange = (product: IProduct) => {
  const allPrices = product.variants.map((variant) => variant.price);
  const lower = minimumBy((price) => price.amount, allPrices);
  const upper = maximumBy((price) => price.amount, allPrices);

  return {
    lower,
    upper,
  };
};

export const productToAveragePrice = (product: IProduct) => {
  const currencyCode = product.variants[0].price.currencyCode;
  const amount = average(
    product.variants.map((variant) => variant.price.amount)
  );

  return {
    currencyCode,
    amount,
  };
};

export const formatPriceAmount = (amount: number) => {
  return Number(amount).toFixed(2);
};

export const priceRangeToString = ({
  lower,
  upper,
}: ReturnType<typeof productToPriceRange>) => {
  if (lower.amount === upper.amount) {
    return `${formatPrice(lower)}`;
  }

  return `${formatPrice(lower)} - ${formatPrice(upper)}`;
};

export const cartItemToTotalPrice = (cartItem: {
  price: IPrice;
  quantity: number;
}): IPrice => {
  return {
    ...cartItem.price,
    amount: cartItem.quantity * cartItem.price.amount,
  };
};
