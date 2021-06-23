import create from "zustand";

type IDrawerState = "opened" | "closed";

export type INavigationUiState = {
  drawerState: IDrawerState;
  setDrawerState: (drawerState: IDrawerState) => void;
};

const useStore = create<INavigationUiState>((set) => ({
  drawerState: "closed",
  setDrawerState: (drawerState) =>
    set((state) => ({
      ...state,
      drawerState,
    })),
}));

export const useNavigationUiState = () => {
  return useStore();
};
