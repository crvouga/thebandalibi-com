import create from "zustand";
import { IVideo } from "../../lib/data-access";

export type IModalState = "opened" | "minimized" | "closed";

export type IPlayerState = "playing" | "paused";

export type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;

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

  playerState: "paused",
  setPlayerState: (playerState) =>
    set((state) => ({
      ...state,
      playerState,
    })),
}));

export const useVideoState = () => {
  const store = useStore();

  const { playerState, setPlayerState, setCurrentVideo, setModalState } = store;

  const openVideo = (video: IVideo) => {
    setPlayerState("playing");
    setCurrentVideo(video);
    setModalState("opened");
  };

  const togglePlayerState = () => {
    setPlayerState(playerState === "paused" ? "playing" : "paused");
  };

  return {
    openVideo,
    togglePlayerState,
    ...store,
  };
};
