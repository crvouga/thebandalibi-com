export type IShowcase = {
  title: string;
  image: string;
  action: {
    title: string;
    url: string;
  };
};

export type IVideo = {
  name: string;
  url: string;
};

export type ISocialMedia = {
  name: string;
  url: string;
  image: string;
};

export type ICMS = {
  getShowcases: () => Promise<IShowcase[]>;
  getVideos: () => Promise<IVideo[]>;
  getSocialMedia: () => Promise<ISocialMedia[]>;
};
