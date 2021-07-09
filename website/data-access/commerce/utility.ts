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
  ILineItem,
  ILineItemUpdate,
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
  someOptions: IProductOption[]
): IProductVariant | null => {
  const variants = product.variants.filter((variant) =>
    variant.selectedOptions.every((selectedOption) =>
      someOptions.some((option) =>
        equalBy(optionToString, selectedOption, option)
      )
    )
  );

  return variants[0] ?? null;
};

const cartToCurrenyCode = (cart: ICart) => {
  const currenyCodes = uniqueBy(
    (x) => x,
    cart.lineItems.map((lineItem) => lineItem.price.currencyCode)
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
      cart.lineItems.map(
        (lineItem) => lineItem.price.amount * lineItem.quantity
      )
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

export const updateLineItems = (
  cart: ICart,
  updates: ILineItemUpdate[]
): ICart => {
  const lineItems = cart.lineItems.map((lineItem) =>
    updates
      .filter((update) => update.lineItemId === lineItem.lineItemId)
      .reduce<ILineItem>(
        (lineItem, update) => ({ ...lineItem, ...update }),
        lineItem
      )
  );

  return {
    ...cart,
    lineItems,
  };
};

export const removeLineItems = (cart: ICart, lineItemIds: string[]): ICart => {
  const lineItems = differenceWith(
    (lineItem, lineItemId) => lineItem.lineItemId === lineItemId,
    cart.lineItems,
    lineItemIds
  );

  return {
    ...cart,
    lineItems,
  };
};

export const cartToTotalQuantity = (cart: ICart) => {
  return sum(cart.lineItems.map((lineItem) => lineItem.quantity));
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

export const lineItemToTotalPrice = (lineItem: ILineItem): IPrice => {
  return {
    ...lineItem.price,
    amount: lineItem.quantity * lineItem.price.amount,
  };
};
