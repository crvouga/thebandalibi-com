import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";
import { tracklistSchema } from "../studio/schemas/tracklist";
import { IDataStore } from "./contracts";

export const SanityDataStore = (): IDataStore => {
  const client = SanityClient({
    projectId: sanityJson.api.projectId,
    dataset: sanityJson.api.dataset,
    useCdn: false,
  });

  return {
    tracklist: {
      async getAll() {
        const [query, type] = tracklistSchema.builder
          .pick(["_id", "title", "tracks"])
          .use();

        const data = await client.fetch<typeof type>(query);

        return [
          ...data.map((data) => ({
            id: data._id,
            title: data.title,
            tracks: [],
          })),
        ];
      },
    },
  };
};
