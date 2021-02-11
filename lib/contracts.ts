export type ITrack = {
  title: string;
};

export type ITracklist = {
  id: string;
  title: string;
};

export type ITracklistDataStore = {
  getAll: () => Promise<ITracklist[]>;
};

export type IDataStore = {
  tracklist: ITracklistDataStore;
};
