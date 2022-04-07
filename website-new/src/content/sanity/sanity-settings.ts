import { ISettingsGet } from '../content-inferface';

export const get: ISettingsGet = async () => {
  return {
    logoSrc: 'hello',
  };
};
