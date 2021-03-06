import create from "zustand";
import { IVideo } from "./domain";

type IVideoState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  currentVideo: IVideo | null;
  setCurrentVideo: (video: IVideo | null) => void;
};

type IState = {
  video: IVideoState;
};

export const useStore = create<IState>((set) => ({
  video: {
    currentVideo: null,
    setCurrentVideo: (currentVideo) =>
      set((state) => ({
        ...state,
        video: {
          ...state.video,
          currentVideo,
        },
      })),

    open: false,
    setOpen: (open) =>
      set((state) => ({
        ...state,
        video: {
          ...state.video,
          open,
        },
      })),
  },
}));
