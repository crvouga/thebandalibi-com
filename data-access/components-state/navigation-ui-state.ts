import create from "zustand";

type IUiState = "shopping-cart-opened" | "navigation-opened" | "closed";

export type IUiStore = {
  state: IUiState;
  setState: (uiState: IUiState) => void;
};

const useStore = create<IUiStore>((set) => ({
  state: "closed",
  setState: (state) =>
    set({
      state,
    }),
}));

export const useUiState = () => {
  return useStore();
};
