import create from "zustand";

type IStatus = "shopping-cart-opened" | "navigation-opened" | "closed";

type IStore = {
  status: IStatus;
  setStatus: (status: IStatus) => void;
};

const useStore = create<IStore>((set) => ({
  status: "closed",
  setStatus: (status) => set({ status }),
}));

export const useUiState = () => {
  return useStore();
};
