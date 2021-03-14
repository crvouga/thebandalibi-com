import {
  IImageGalleryStore,
  IPlatformStore,
  IReleaseStore,
  ISettingsStore,
} from ".";
import { ITagStore } from "./tag";
import { IVideoStore } from "./video";

export type IStore = {
  video: IVideoStore;
  tag: ITagStore;
  imageGallery: IImageGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};
