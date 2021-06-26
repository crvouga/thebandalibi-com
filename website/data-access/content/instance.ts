import { Content } from "./content";
import { SanityClient } from "./sanity";

const sanityClient = SanityClient();

export const content = Content({
  sanityClient,
});
