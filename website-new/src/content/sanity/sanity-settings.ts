import { builder } from '../../../sanity-studio/schemas/settings';
import { sanityClient, urlFor } from './__sanity-client';
import { ISettingsGet } from '../content-inferface';

export const get: ISettingsGet = async () => {
  const [query, type] = builder.pick(['logoDark', 'logoLight']).first().use();

  const result = await sanityClient.fetch<typeof type>(query);

  const dark = urlFor(result.logoDark.asset._ref).url();

  const light = urlFor(result.logoLight.asset._ref).url();

  return {
    logo: {
      dark,
      light,
    },
  };
};
