import { Content } from "./content";
import { PrintfulClient, SanityClient } from "./frameworks";

const sanityClient = SanityClient();

const printfulClient = PrintfulClient();

export const content = Content({
  sanityClient,
  printfulClient,
});
