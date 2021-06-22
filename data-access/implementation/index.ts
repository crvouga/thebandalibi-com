import { ContentDataStoreSanityPrintful } from "./content-data-store";
import { PrintfulClient, SanityClient } from "./frameworks";

const sanityClient = SanityClient();

const printfulClient = PrintfulClient();

export const contentDataStore = ContentDataStoreSanityPrintful({
  sanityClient,
  printfulClient,
});
