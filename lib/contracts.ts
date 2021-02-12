export type ITrack = {
  id: string;
  title: string;
};

export type IArtwork =
  | {
      imageUrl: string;
    }
  | {
      videoUrl: string;
    };

export type ITracklist = {
  id: string;
  title: string;
  artwork: IArtwork[];
  tracks: ITrack[];
};

export type IPhoto = {
  imageUrl: string;
};

export type ITracklistDataStore = {
  getAll: () => Promise<ITracklist[]>;
};

export type IPhotoDataStore = {
  getAll: () => Promise<IPhoto[]>;
};

export type IDataStore = {
  tracklist: ITracklistDataStore;
  photo: IPhotoDataStore;
};
