import create from "zustand";
import { persist } from "zustand/middleware";
import { IVariant } from "../../lib/data-access";
import { createId } from "../../lib/utility";

export type IShoppingCartItem = {
  id: string;
  variant: IVariant;
};

export type IShoppingCartItemsState = {
  items: IShoppingCartItem[];
  setItems: (items: IShoppingCartItem[]) => void;
};

export type IModalState = "opened" | "closed";

export type IShoppingCartState = {
  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;
};

const useStoreItems = create<IShoppingCartItemsState>(
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

const useStore = create<IShoppingCartState>((set) => ({
  modalState: "closed",
  setModalState: (modalState: IModalState) =>
    set((state) => ({
      ...state,
      modalState,
    })),
}));

export const useShoppingCartState = () => {
  const { modalState, setModalState } = useStore();
  const { items, setItems } = useStoreItems();

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

  const openModal = () => {
    setModalState("opened");
  };

  const closeModal = () => {
    setModalState("closed");
  };

  return {
    modalState,
    setModalState,
    openModal,
    closeModal,
    items,
    addItem,
    removeItem,
  };
};
