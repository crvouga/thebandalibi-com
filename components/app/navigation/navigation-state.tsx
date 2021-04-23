import create from "zustand";

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
  const { drawerState, setDrawerState } = useStore();

  const openDrawer = () => {
    setDrawerState("opened");
  };

  const closeDrawer = () => {
    setDrawerState("closed");
  };

  return {
    drawerState,
    openDrawer,
    closeDrawer,
  };
};
