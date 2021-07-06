import { useCallback } from "react";
import create from "zustand";
import { IVideo } from "../content";

export type IModalState = "opened" | "minimized" | "closed";

export type IPlayerState = "playing" | "paused";

type IProgress = {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
};

const initialProgress: IProgress = {
  played: 0,
  playedSeconds: 0,
  loaded: 0,
  loadedSeconds: 0,
};

export type IVideoPlayerState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;

  durationSeconds: number;
  setDurationSeconds: (durationSeconds: number) => void;

  progress: IProgress;
  setProgress: (progress: IProgress) => void;

  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;

  currentVideo: IVideo | undefined;
  setCurrentVideo: (video?: IVideo) => void;
};

const useStore = create<IVideoPlayerState>((set) => ({
  durationSeconds: 0,
  setDurationSeconds: (durationSeconds) =>
    set((state) => ({
      ...state,
      durationSeconds,
    })),

  progress: initialProgress,
  setProgress: (progress) =>
    set((state) => ({
      ...state,
      progress,
    })),

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
}));

export const useVideoPlayerState = () => {
  const store = useStore();

  const {
    currentVideo,
    playerState,
    setPlayerState,
    setCurrentVideo,
    setModalState,
  } = store;

  const openVideo = useCallback(
    (video: IVideo) => {
      store.setPlayerState("playing");
      store.setCurrentVideo(video);
      store.setModalState("opened");
      store.setProgress(initialProgress);
      store.setDurationSeconds(0);
    },
    [setPlayerState, setCurrentVideo, setModalState]
  );

  const togglePlayerState = useCallback(() => {
    setPlayerState(playerState === "playing" ? "paused" : "playing");
  }, [setPlayerState, playerState]);

  const isCurrentVideo = useCallback(
    (video: IVideo) => {
      return currentVideo?.url === video.url;
    },
    [currentVideo?.url]
  );

  const closeVideo = useCallback(() => {
    setPlayerState("paused");
    setModalState("closed");
  }, [setPlayerState, setCurrentVideo, setModalState]);

  const isPlaying = playerState === "playing";

  return {
    openVideo,
    closeVideo,
    togglePlayerState,
    isCurrentVideo,
    isPlaying,
    ...store,
  };
};
