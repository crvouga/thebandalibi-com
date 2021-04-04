import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import sanityJson from "../../studio/sanity.json";

export const sanityClient = SanityClient({
  projectId: sanityJson.api.projectId,
  dataset: sanityJson.api.dataset,
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => {
  return builder.image(source);
};
