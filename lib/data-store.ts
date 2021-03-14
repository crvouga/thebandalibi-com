import { DataStoreSanity } from "./data-access";
import { sanityClient } from "./sanity-client";

export const dataStore = DataStoreSanity(sanityClient);
