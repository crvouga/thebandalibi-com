import groq from "groq";
import SanityClient from "@sanity/client";
import sanityJson from "../studio/sanity.json";
import { IDataStore } from "./contracts";

export const sanityClient = SanityClient({
  projectId: sanityJson.api.projectId,
  dataset: sanityJson.api.dataset,
  useCdn: false,
});

export const SanityDataStore = (): IDataStore => {
  return {
    tracklist: {
      async getAll() {
        const query = `
          *[_type == 'tracklist'] {
            _id,
            title,
            artwork,
            tracks[]-> {
              _id,
              title
            }
          }`;

        type IType = {
          _id: string;
          title: string;
          tracks: {
            _id: string;
            title: string;
          }[];
        }[];

        const data = await sanityClient.fetch<IType>(query);

        console.log(JSON.stringify(data, null, 2));

        return data.map((data) => ({
          id: data._id,
          title: data.title,
          artwork: [],
          tracks: data.tracks.map((data) => ({
            id: data._id,
            title: data.title,
          })),
        }));
      },
    },
    photo: {
      async getAll() {
        const query = groq`
          *[_type == 'photo']{
            "imageUrl": image.asset->url
          }
        `;

        type IType = {
          imageUrl: string;
        }[];

        const data = await sanityClient.fetch<IType>(query);

        return [
          ...data.map((data) => ({
            imageUrl: data.imageUrl,
          })),
        ];
      },
    },
  };
};
