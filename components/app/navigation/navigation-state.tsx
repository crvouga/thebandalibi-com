import create from "zustand";

export type IDrawerState = "opened" | "closed";

export type INavigationState = {
  drawerState: IDrawerState;
  setDrawerState: (drawerState: IDrawerState) => void;
  title: string;
  setTitle: (title: string) => void;
};

const useStore = create<INavigationState>((set) => ({
  drawerState: "closed",
  setDrawerState: (drawerState) =>
    set((state) => ({
      ...state,
      drawerState,
    })),

  title: "",
  setTitle: (title) =>
    set((state) => ({
      ...state,
      title,
    })),
}));

export const useNavigationState = () => {
  const { title, setTitle, drawerState, setDrawerState } = useStore();

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
    title,
    setTitle,
  };
};
