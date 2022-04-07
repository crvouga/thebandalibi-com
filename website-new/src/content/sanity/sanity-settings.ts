import { builder } from '../../../sanity-studio/schemas/settings';
import { sanityClient, urlFor } from './__sanity-client';
import { ISettingsGet } from '../content-inferface';

export const get: ISettingsGet = async () => {
  const [query, type] = builder.pick('logo').first().use();

  const result = await sanityClient.fetch<typeof type>(query);

  const src = urlFor(result.asset._ref).url();

  console.log({ src: src });

  return {
    logoSrc: src,
  };
};
