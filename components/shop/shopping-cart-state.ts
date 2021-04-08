import create from "zustand";
import { persist } from "zustand/middleware";
import { IVariant } from "../../lib/data-access";
import { createId } from "../../lib/utility";

type IShoppingCartItem = {
  id: string;
  variant: IVariant;
};

export type IShoppingCartState = {
  items: IShoppingCartItem[];
  setItems: (items: IShoppingCartItem[]) => void;
};

const useStore = create<IShoppingCartState>(
  persist(
    (set) => ({
      items: [],
      setItems: (items) =>
        set((state) => ({
          ...state,
          items,
        })),
    }),
    {
      name: "shopping-cart",
    }
  )
);

export const useShoppingCartState = () => {
  const { items, setItems } = useStore();

  const addItem = ({ variant }: { variant: IVariant }) => {
    const item = {
      id: createId(),
      variant,
    };

    setItems([...items, item]);
  };

  const removeItem = ({ id }: { id: string }) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return {
    items,
    addItem,
    removeItem,
  };
};
