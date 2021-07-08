import createEmotionCache from "@emotion/cache";

export const createCache = () => {
  const cache = createEmotionCache({ key: "css" });
  cache.compat = true;
  return cache;
};
