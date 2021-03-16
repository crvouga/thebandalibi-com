import { useRouter } from "next/router";
import create from "zustand";
import { ITag, IVideo } from "../../lib/data-access";
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

  const openVideo = (video: IVideo) => {
    setPlayerState("playing");
    setCurrentVideo(video);
    setModalState("opened");
  };

  const togglePlayerState = () => {
    setPlayerState(playerState === "playing" ? "paused" : "playing");
  };

  const isCurrentVideo = (video: IVideo) => {
    return currentVideo?.url === video.url;
  };

  const closeVideo = () => {
    setPlayerState("paused");
    setCurrentVideo(undefined);
    setModalState("closed");
  };

  const toggleTag = (tag: ITag) => {
    setSelectedTag(selectedTag?.slug === tag.slug ? undefined : tag);
  };

  const router = useRouter();

  const openTag = (tag: ITag) => {
    router.push(routes.allVideos());
    setSelectedTag(tag);
    setModalState("minimized");
  };

  return {
    openTag,
    openVideo,
    closeVideo,
    togglePlayerState,
    isCurrentVideo,
    toggleTag,
    isPlaying: playerState === "playing",
    ...store,
  };
};
