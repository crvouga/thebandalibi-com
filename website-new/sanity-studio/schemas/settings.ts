import { defineDocument } from 'sanity-typed-queries';
import { hero } from './hero';

const { document, builder } = defineDocument(
  'settings',
  {
    logoDark: {
      type: 'image',
    },
    logoLight: {
      type: 'image',
    },
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
  },
  [hero],
);

export { builder };

export default document;
