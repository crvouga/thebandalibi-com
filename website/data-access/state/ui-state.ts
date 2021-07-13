import create from "zustand";

type INavigationUiStatus = "opened" | "closed";

type INavigationUi = {
  status: INavigationUiStatus;
  setStatus: (status: INavigationUiStatus) => void;
};

export const useNavigationUi = create<INavigationUi>((set) => ({
  status: "closed",
  setStatus: (status) => set({ status }),
}));

type ICartUiStatus = "opened" | "closed";

type ICartUi = {
  status: ICartUiStatus;
  setStatus: (status: ICartUiStatus) => void;
};

export const useCartUi = create<ICartUi>((set) => ({
  status: "closed",
  setStatus: (status) => set({ status }),
}));
