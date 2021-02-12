import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";
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
        const query = `
          *[_type == 'tracklist']{
            _id,
            title,
            tracks,
          }
        `;

        type IType = {
          _id: string;
          title: string;
          tracks: string;
        }[];

        const data = await client.fetch<IType>(query);

        return [
          ...data.map((data) => ({
            id: data._id,
            title: data.title,
            tracks: [],
          })),
        ];
      },
    },
    photo: {
      async getAll() {
        const query = `
          *[_type == 'photo']{
            "imageUrl": image.asset->url
          }
        `;

        type IType = {
          imageUrl: string;
        }[];

        const data = await client.fetch<IType>(query);

        return [
          ...data.map((data) => ({
            imageUrl: data.imageUrl,
          })),
        ];
      },
    },
  };
};
