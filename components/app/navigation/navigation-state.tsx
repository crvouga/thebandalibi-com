import create from "zustand";

export type IGutterState = "disabled" | "enabled";
export type IBarState = "visible" | "hidden";
export type IDrawerState = "opened" | "closed";

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
