import { ITag, IVideo } from "@core";
import { useRouter } from "next/router";
import { useCallback } from "react";
import create from "zustand";
import { routes } from "../../lib/routes";

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

export type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;

  durationSeconds: number;
  setDurationSeconds: (durationSeconds: number) => void;

  progress: IProgress;
  setProgress: (progress: IProgress) => void;

  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;

  currentVideo?: IVideo;
  setCurrentVideo: (video?: IVideo) => void;

  selectedTag?: ITag;
  setSelectedTag: (tag?: ITag) => void;
};

const useStore = create<IVideoState>((set) => ({
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

  selectedTag: undefined,
  setSelectedTag: (selectedTag) =>
    set((state) => ({
      ...state,
      selectedTag,
    })),
}));

export const useVideoState = () => {
  const store = useStore();

  const {
    currentVideo,
    playerState,
    setPlayerState,
    setCurrentVideo,
    setModalState,
    setSelectedTag,
    selectedTag,
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
    setCurrentVideo(undefined);
    setModalState("closed");
  }, [setPlayerState, setCurrentVideo, setModalState]);

  const toggleTag = useCallback(
    (tag: ITag) => {
      setSelectedTag(selectedTag?.slug === tag.slug ? undefined : tag);
    },
    [setSelectedTag, selectedTag?.slug]
  );

  const router = useRouter();

  const openTag = useCallback(
    (tag: ITag) => {
      router.push(routes.allVideoGalleries());
      setSelectedTag(tag);
      setModalState("minimized");
    },
    [setSelectedTag, setModalState, router.push]
  );

  const isPlaying = playerState === "playing";

  return {
    openTag,
    openVideo,
    closeVideo,
    togglePlayerState,
    isCurrentVideo,
    toggleTag,
    isPlaying,
    selectedTag,
    currentVideo,

    ...store,
  };
};
