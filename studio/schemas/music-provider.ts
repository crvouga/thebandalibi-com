export default {
  title: "Music Provider",
  name: "musicProvider",
  type: "document",
  fields: [
    {
      name: "musicProviderName",
      title: "Music Provider Name",
      required: true,
      type: "string",
    },

    {
      name: "artistLink",
      title: "Artist Link",
      type: "url",
    },

    {
      name: "tracklistLinks",
      title: "Tracklist Links",
      type: "array",
      of: [
        {
          name: "Tracklist",
          title: "Tracklist",
          type: "object",
          fields: [
            {
              name: "tracklist",
              title: "Trackist",
              type: "reference",
              to: [
                {
                  name: "tracklist",
                  title: "Trackllist",
                  type: "tracklist",
                },
              ],
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "trackLinks",
      title: "Track Links",
      type: "array",
      of: [
        {
          name: "Tracklist",
          title: "Tracklist",
          type: "object",
          fields: [
            {
              name: "track",
              title: "Track",
              type: "reference",
              to: [
                {
                  name: "track",
                  title: "Track",
                  type: "track",
                },
              ],
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
