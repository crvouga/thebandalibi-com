import {
  IImageGalleryStore,
  IPlatformStore,
  IReleaseStore,
  ISettingsStore,
  IVideoGalleryStore,
} from ".";
import { IVideoStore } from "./video";
import { ITagStore } from "./tag";

export type IStore = {
  video: IVideoStore;
  tag: ITagStore;
  imageGallery: IImageGalleryStore;
  videoGallery: IVideoGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};
