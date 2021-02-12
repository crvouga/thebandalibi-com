import React from "react";
import getYouTubeId from "get-youtube-id";

const YoutubeEmbedPreview = (props: { value: { url: string } }) => {
  const youtubeVideoId = getYouTubeId(props.value.url);

  if (!youtubeVideoId) {
    return <div>Missing Youtube Url</div>;
  }

  const embedSrc = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={embedSrc}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default {
  name: "youTubeVideo",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      tile: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YoutubeEmbedPreview,
  },
};
