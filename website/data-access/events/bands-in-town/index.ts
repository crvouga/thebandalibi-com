import { BandsInTownClient } from "./bands-in-town-client";
import { getBandsInTownAppId, getBandsInTownArtistId } from "./env";
import { Events } from "./events";

const bandsInTownClient = BandsInTownClient();

export const events = Events({
  artistId: getBandsInTownArtistId(),
  appId: getBandsInTownAppId(),
  bandsInTownClient,
});
