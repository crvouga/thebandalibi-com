import { defineDocument } from 'sanity-typed-queries';
import { hero } from './hero';
import { video } from './video';

export const { settings, document, builder } = defineDocument(
  'settings',
  {
    heros: {
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'hero',
            },
          ],
        },
      ],
    },

    videos: {
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'video',
            },
          ],
        },
      ],
    },

    logoDark: {
      type: 'image',
    },

    logoLight: {
      type: 'image',
    },
  },

  [hero, video],
);

export default document;
