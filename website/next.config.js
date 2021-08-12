const SanityClient = require("@sanity/client");

const santityClient = SanityClient({
  projectId: "mswm483g",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});

const getRewrites = async () => {
  const query = `
      *[_type == 'settings'] {
        rewrites
      }[0]
    `;

  const results = await santityClient.fetch(query);

  const rewrites = results.rewrites
    .filter(rewrite => {
      return typeof rewrite.source === 'string' && typeof rewrite.destination === 'string';
    })
    .map(rewrite => {
      return {
        source: rewrite.source,
        destination: rewrite.destination,
      };
    });

  return rewrites;
};

module.exports = {
  images: {
    domains: [
      "cdn.shopify.com",
      "cdn.sanity.io",
      "img.youtube.com",
    ],
  },

  async rewrites() {
    const rewrites = await getRewrites();

    return rewrites;
  }
};