import createEmotionCache from "@emotion/cache";

const createCache = () => {
  const cache = createEmotionCache({ key: "css" });
  cache.compat = true;
  return cache;
};

export const cache = createCache();
