export type IHero = {
  title: string;
  subtitle: string;
  primaryTitle: string;
  secondaryTitle: string;
  image: string;
  label: string;
};

export type IVideo = {
  youtubeUrl: string;
  title: string;
  thumbnail: string;
};

export type ISettings = {
  landingPage: {
    heros: IHero[];
    videos: IVideo[];
  };
  logo: {
    dark: string;
    light: string;
  };
};

export type ISettingsGet = () => Promise<ISettings>;

export type IContent = {
  Settings: {
    get: ISettingsGet;
  };
};
