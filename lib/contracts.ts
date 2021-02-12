export type ITrack = {
  title: string;
};

export type ITracklist = {
  id: string;
  title: string;
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
