import { DataStoreSanityPrintful } from "./data-store";
import { PrintfulClient, SanityClient } from "./frameworks";

const sanityClient = SanityClient();

const printfulClient = PrintfulClient();

export const dataStore = DataStoreSanityPrintful({
  sanityClient,
  printfulClient,
});
