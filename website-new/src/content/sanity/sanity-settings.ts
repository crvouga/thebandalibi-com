import {
  builder as settingsBuilder,
  settings,
} from '../../../sanity-studio/schemas/settings';
import { builder as videoBuilder } from '../../../sanity-studio/schemas/video';
import { builder as heroBuilder } from '../../../sanity-studio/schemas/hero';
import { sanityClient, urlFor } from './__sanity-client';
import { ISettingsGet } from '../content-inferface';
import { toYouTubeThumbnailUrl } from 'content/content-utils';

export const get: ISettingsGet = async () => {
  const [query, type] = settingsBuilder
    .map((h) => ({
      heroIds: h.heros.resolveIn('_id').use(),
      videoIds: h.videos.resolveIn('_id').use(),
    }))
    .pick([
      'logoDark',
      'logoLight',
      'heroIds',
      'videoIds',
      'musicLink',
      'videoLink',
    ])
    .first()
    .use();

  const settingsResult = await sanityClient.fetch<typeof type>(query);

  const dark = urlFor(settingsResult.logoDark.asset._ref).url();

  const light = urlFor(settingsResult.logoLight.asset._ref).url();

  const heroResults = await getHeros(settingsResult.heroIds);

  const videoResults = await getVideos(settingsResult.videoIds);

  return {
    landingPage: {
      heros: heroResults.map((result) => ({
        label: result.label,
        title: result.title,
        subtitle: result.subtitle,
        secondaryTitle: result.secondaryTitle,
        primaryTitle: result.primaryTitle,
        image: urlFor(result.image.asset._ref).url(),
      })),
      videos: videoResults.map((result) => ({
        youtubeUrl: result.youtubeUrl,
        title: result.title,
        thumbnail: toYouTubeThumbnailUrl(result.youtubeUrl),
      })),
    },

    links: [
      {
        title: 'Music',
        href: settingsResult.musicLink ?? '',
        type: 'external',
      },
      {
        title: 'Video',
        href: settingsResult.videoLink ?? '',
        type: 'external',
      },

      {
        title: 'Merch',
        href: '/merch',
        type: 'internal',
      },
    ],

    logo: {
      dark,
      light,
    },
  };
};

const getVideos = async (ids: string[]) => {
  const results: ReturnType<typeof makeVideoQuery>[1][] = [];

  for (const id of ids) {
    const [query, type] = makeVideoQuery(id);

    const result = await sanityClient.fetch<typeof type>(query);

    results.push(result);
  }

  return results;
};

const makeVideoQuery = (videoId: string) => {
  return videoBuilder
    .filter(`_id == "${videoId}"`)
    .pick(['title', 'youtubeUrl', '_id'])
    .first()
    .use();
};

const getHeros = async (ids: string[]) => {
  const results: ReturnType<typeof makeHeroQuery>[1][] = [];

  for (const id of ids) {
    const [query, type] = makeHeroQuery(id);

    const result = await sanityClient.fetch<typeof type>(query);

    results.push(result);
  }

  return results;
};

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
