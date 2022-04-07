import { defineDocument } from 'sanity-typed-queries';

const { document, builder } = defineDocument('settings', {
  logo: {
    type: 'image',
  },
});

export { builder };

export default document;
