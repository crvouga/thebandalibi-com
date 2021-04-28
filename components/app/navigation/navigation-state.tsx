import create from "zustand";

export type IGutterState = "disabled" | "enabled";
export type IBarState = "visible" | "hidden";
export type IDrawerState = "opened" | "closed";

export type INavigationState = {
  gutterState: IGutterState;
  setGutterState: (gutterState: IGutterState) => void;
  barState: IBarState;
  setBarState: (barState: IBarState) => void;
  drawerState: IDrawerState;
  setDrawerState: (drawerState: IDrawerState) => void;
};

const useStore = create<INavigationState>((set) => ({
  gutterState: "enabled",
  setGutterState: (gutterState) =>
    set((state) => ({
      ...state,
      gutterState,
    })),

  drawerState: "closed",
  setDrawerState: (drawerState) =>
    set((state) => ({
      ...state,
      drawerState,
    })),

  barState: "visible",
  setBarState: (barState) =>
    set((state) => ({
      ...state,
      barState,
    })),
}));

export const useNavigationState = () => {
  return useStore();
};
