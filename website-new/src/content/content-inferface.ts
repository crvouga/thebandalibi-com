export type IHero = {
  title: string;
  subtitle: string;
  primaryTitle: string;
  secondaryTitle: string;
  image: string;
};

export type ISettings = {
  heros: IHero[];
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
