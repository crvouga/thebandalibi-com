import immer from "immer";
import create from "zustand";

export type INavigationState = {
  isVisible: boolean;
};

export type IState = {
  setState: (setState: (state: IState) => void) => void;

  navigation: INavigationState;
};

export const useStore = create<IState>((set) => ({
  setState: (setState) => set(immer(setState)),
  navigation: {
    isVisible: false,
  },
}));
