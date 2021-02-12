export default {
  name: "tracklist",
  title: "Tracklist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },

    {
      name: "artwork",
      title: "Artwork",
      type: "image",
    },

    {
      name: "tracks",
      title: "Tracks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              title: "Track",
              type: "track",
            },
          ],
        },
      ],
    },

    {
      name: "spotifyLink",
      title: "Spotify Link",
      type: "url",
    },
  ],
};
