const SanityClient = require("@sanity/client");

const santityClient = SanityClient({
  projectId: "mswm483g",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});

const isValidSource = (source) => {
  return typeof source === 'string' && source[0] === "/";
};

const isValidDestination = (destination) => {
  return typeof source === 'string' && source[0] === "/";
};


const isValidRedirect = ({
  source,
  destination,
}) => {
  return isValidSource(source) && isValidDestination(destination);
};

const getRedirects = async () => {
  const query = `
      *[_type == 'settings'] {
        redirects
      }[0]
    `;

  const results = await santityClient.fetch(query);

  const redirects = results.redirects
    .filter(isValidRedirect)
    .map(({
      source,
      destination,
    }) => {
      return {
        source,
        destination,
        permanent: true,
      };
    });

  return redirects;
};

const isValidRewrite = ({
  source,
  destination,
}) => {
  return isValidSource(source) && isValidDestination(destination);
};

const getRewrites = async () => {
  const query = `
      *[_type == 'settings'] {
        rewrites
      }[0]
    `;

  const results = await santityClient.fetch(query);

  const rewrites = results.rewrites
    .filter(isValidRewrite)
    .map(({
      source,
      destination,
    }) => {
      return {
        source,
        destination,
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
      "lh3.googleusercontent.com",
    ],
  },

  async redirects() {
    const redirects = await getRedirects();

    return redirects;
  },

  async rewrites() {
    const rewrites = await getRewrites();

    return rewrites;
  }
};