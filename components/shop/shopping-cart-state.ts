import create from "zustand";

type IShoppingCartItem = {
  quantity: number;
  sku: string;
};

export type IShoppingCartState = {
  items: IShoppingCartItem[];
  setItems: (items: IShoppingCartItem[]) => void;
};

const useStore = create<IShoppingCartState>((set) => ({
  items: [],
  setItems: (items) =>
    set((state) => ({
      ...state,
      items,
    })),
}));

export const useShoppingCartState = () => {
  const { items, setItems } = useStore();

  const addItem = (item: IShoppingCartItem) => {
    setItems([...items, item]);
  };

  return {
    items,
    addItem,
  };
};
