import { Content } from "./content";
import { SanityClient } from "./sanity-client";

const sanityClient = SanityClient();

export const content = Content({
  sanityClient,
});
