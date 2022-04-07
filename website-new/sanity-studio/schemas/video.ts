import { defineDocument } from 'sanity-typed-queries';

export const { video, document, builder } = defineDocument('video', {
  youtubeUrl: {
    type: 'url',
  },
  title: {
    type: 'string',
  },
});

export default document;
