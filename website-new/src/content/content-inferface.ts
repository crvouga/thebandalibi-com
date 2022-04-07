export type ISettings = {
  logoSrc: string;
};

export type ISettingsGet = () => Promise<ISettings>;

export type IContent = {
  Settings: {
    get: ISettingsGet;
  };
};
