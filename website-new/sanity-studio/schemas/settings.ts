import { defineDocument } from 'sanity-typed-queries';

const { document, builder } = defineDocument('settings', {
  logoDark: {
    type: 'image',
  },
  logoLight: {
    type: 'image',
  },
});

export { builder };

export default document;
