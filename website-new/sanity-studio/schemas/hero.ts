import { defineDocument } from 'sanity-typed-queries';

export const { hero, document, builder } = defineDocument('hero', {
  label: {
    type: 'string',
  },
  title: {
    type: 'string',
  },
  subtitle: {
    type: 'string',
  },
  primaryTitle: {
    type: 'string',
  },
  secondaryTitle: {
    type: 'string',
  },
  image: {
    type: 'image',
  },
});

export default document;
