import create from "zustand";

type IDrawerState = "opened" | "closed";

export type INavigationState = {
  drawerState: IDrawerState;
  setDrawerState: (drawerState: IDrawerState) => void;
};

const useStore = create<INavigationState>((set) => ({
  drawerState: "closed",
  setDrawerState: (drawerState) =>
    set((state) => ({
      ...state,
      drawerState,
    })),
}));

export const useNavigationState = () => {
  return useStore();
};
