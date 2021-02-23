import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";

export const sanityClient = SanityClient({
  projectId: sanityJson.api.projectId,
  dataset: sanityJson.api.dataset,
  useCdn: false,
});
