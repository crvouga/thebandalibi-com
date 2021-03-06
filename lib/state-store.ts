import create from "zustand";
import { IVideo } from "./domain";

type IModalState = "open" | "minimized" | "closed";
type IPlayerState = "playing" | "paused";
type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;

  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;

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

    modalState: "closed",
    setModalState: (modalState) =>
      set((state) => ({
        ...state,
        video: {
          ...state.video,
          modalState,
        },
      })),

    playerState: "paused",
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
