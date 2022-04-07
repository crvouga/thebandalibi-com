export type ISettings = {
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
