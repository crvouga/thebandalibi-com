import create from "zustand";
import { IVideo } from "../../lib/domain";

export type IModalState = "opened" | "minimized" | "closed";

export type IPlayerState = "playing" | "paused";

export type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;
  togglePlayerState: () => void;

  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;

  currentVideo?: IVideo;
  setCurrentVideo: (video?: IVideo) => void;
};

const useStore = create<IVideoState>((set) => ({
  currentVideo: undefined,
  setCurrentVideo: (currentVideo) =>
    set((state) => ({
      ...state,
      currentVideo,
    })),

  modalState: "closed",
  setModalState: (modalState) =>
    set((state) => ({
      ...state,
      modalState,
    })),

  playerState: "playing",
  setPlayerState: (playerState) =>
    set((state) => ({
      ...state,
      playerState,
    })),
  togglePlayerState: () =>
    set((state) => ({
      ...state,
      playerState: state.playerState === "paused" ? "playing" : "paused",
    })),
}));

export const useVideoState = () => {
  const store = useStore();

  const openVideo = (video: IVideo) => {
    store.setPlayerState("playing");
    store.setCurrentVideo(video);
    store.setModalState("opened");
  };

  return {
    openVideo,
    ...store,
  };
};
