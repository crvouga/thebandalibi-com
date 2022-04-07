import { builder } from '../../../sanity-studio/schemas/settings';
import { builder as heroBuilder } from '../../../sanity-studio/schemas/hero';
import { sanityClient, urlFor } from './__sanity-client';
import { ISettingsGet } from '../content-inferface';

export const get: ISettingsGet = async () => {
  const [query, type] = builder
    .map((h) => ({ heroIds: h.heros.resolveIn('_id').use() }))
    .pick(['logoDark', 'logoLight', 'heroIds'])
    .first()
    .use();

  const settingsResult = await sanityClient.fetch<typeof type>(query);

  const dark = urlFor(settingsResult.logoDark.asset._ref).url();

  const light = urlFor(settingsResult.logoLight.asset._ref).url();

  const heroResults = await getHeros(settingsResult.heroIds);

  return {
    heros: heroResults.map((result) => ({
      label: result.label,
      title: result.title,
      subtitle: result.subtitle,
      secondaryTitle: result.secondaryTitle,
      primaryTitle: result.primaryTitle,
      image: urlFor(result.image.asset._ref).url(),
    })),
    logo: {
      dark,
      light,
    },
  };
};

const getHeros = async (heroIds: string[]) => {
  const heroResults: IHero[] = [];

  for (const heroId of heroIds) {
    const [query, type] = makeHeroQuery(heroId);

    const heroResult = await sanityClient.fetch<typeof type>(query);

    heroResults.push(heroResult);
  }

  return heroResults;
};

type IHero = ReturnType<typeof makeHeroQuery>[1];

const makeHeroQuery = (heroId: string) => {
  return heroBuilder
    .filter(`_id == "${heroId}"`)
    .pick([
      'image',
      'primaryTitle',
      'secondaryTitle',
      'subtitle',
      'title',
      'label',
      '_id',
    ])

    .first()
    .use();
};
