import { useRouter } from "next/router";
import { useCallback } from "react";
import create from "zustand";
import { ITag, IVideo } from "@core";
import { routes } from "../../lib/routes";

export type IModalState = "opened" | "minimized" | "closed";

export type IPlayerState = "playing" | "paused";

export type IVideoState = {
  playerState: IPlayerState;
  setPlayerState: (playerState: IPlayerState) => void;

  modalState: IModalState;
  setModalState: (modalState: IModalState) => void;

  currentVideo?: IVideo;
  setCurrentVideo: (video?: IVideo) => void;

  selectedTag?: ITag;
  setSelectedTag: (tag?: ITag) => void;
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

  selectedTag: undefined,
  setSelectedTag: (selectedTag) =>
    set((state) => ({
      ...state,
      selectedTag,
    })),
}));

export const useVideoState = () => {
  const {
    currentVideo,
    playerState,
    setPlayerState,
    setCurrentVideo,
    setModalState,
    setSelectedTag,
    selectedTag,
    modalState,
  } = useStore();

  const openVideo = useCallback(
    (video: IVideo) => {
      setPlayerState("playing");
      setCurrentVideo(video);
      setModalState("opened");
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
    playerState,
    modalState,
    setModalState,
    setPlayerState,
  };
};
