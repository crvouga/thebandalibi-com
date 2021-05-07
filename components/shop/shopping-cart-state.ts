import create from "zustand";
import { persist } from "zustand/middleware";
import { IVariant } from "@core";

export type IShoppingCartItem = {
  variant: IVariant;
  quantity: number;
};

export type IShoppingCartItemsState = {
  items: {
    [id: string]: IShoppingCartItem;
  };
  setItems: (items: { [id: string]: IShoppingCartItem }) => void;
};

const useStoreItems = create<IShoppingCartItemsState>(
  persist(
    (set) => ({
      items: {},
      setItems: (items) =>
        set((state) => ({
          ...state,
          items,
        })),
    }),
    {
      name: "the-band-alibi-shopping-cart",
    }
  )
);

export const ITEM_QUANTITY_UPPER_BOUND = Infinity;
export const ITEM_QUANTITY_LOWER_BOUND = 1;

export const useShoppingCartState = () => {
  const { items, setItems } = useStoreItems();

  const removeItem = ({ variantId }: { variantId: string | number }) => {
    const { [variantId]: _, ...rest } = items;
    setItems(rest);
  };

  const addItem = ({ variant }: { variant: IVariant }) => {
    setItems({
      ...items,
      [variant.id]: {
        variant,
        quantity: (items[variant.id]?.quantity ?? 0) + 1,
      },
    });
  };

  const incrementItem = ({ variantId }: { variantId: string | number }) => {
    setItems({
      ...items,
      [variantId]: {
        ...items[variantId],
        quantity: items[variantId].quantity + 1,
      },
    });
  };

  const decrementItem = ({ variantId }: { variantId: string | number }) => {
    setItems({
      ...items,
      [variantId]: {
        ...items[variantId],
        quantity: items[variantId].quantity - 1,
      },
    });
  };

  const itemList = Object.values(items);

  return {
    incrementItem,
    decrementItem,
    itemList,
    addItem,
    removeItem,
  };
};
