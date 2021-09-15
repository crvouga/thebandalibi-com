export const getBandsInTownAppId = () => {
  const appId = process.env.BANDS_IN_TOWN_APP_ID;

  if (appId) {
    return appId;
  }

  return null;

  // throw new Error("process.env.BANDS_IN_TOWN_APP_ID is undefined");
};

export const getBandsInTownArtistId = () => {
  const artistId = process.env.NEXT_PUBLIC_BANDS_IN_TOWN_ARTIST_ID;

  if (artistId) {
    return artistId;
  }

  return null;
  // throw new Error(
  //   "process.env.NEXT_PUBLIC_BANDS_IN_TOWN_ARTIST_ID is undefined"
  // );
};
