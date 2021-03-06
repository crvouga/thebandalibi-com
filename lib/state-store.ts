import create from "zustand";
import { IVideo } from "./domain";

type IPlayerState = "open" | "minimized" | "closed";

type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;
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

    playerState: "closed",
    setPlayerState: (playerState) =>
      set((state) => ({
        ...state,
        video: {
          ...state.video,
          playerState,
        },
      })),
  },
}));
