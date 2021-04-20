import React from "react";
import { VideoIcon } from "../../components/shared/icons";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";

export default {
  type: "document",
  name: "video-gallery",
  title: "Video Gallery",
  icon: VideoIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      required: true,
      options: {
        source: "name",
      },
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "video",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      name: "name",
      videoUrl1: "videos.0.url",
      videoUrl2: "videos.1.url",
      videoUrl3: "videos.2.url",
      videoUrl4: "videos.3.url",
    },

    prepare({
      name,
      videoUrl1,
      videoUrl2,
      videoUrl3,
      videoUrl4,
    }: {
      name?: string;
      videoUrl1?: string;
      videoUrl2?: string;
      videoUrl3?: string;
      videoUrl4?: string;
    }) {
      const videoUrls = [videoUrl1, videoUrl2, videoUrl3, videoUrl4].filter(
        (videoUrl) => typeof videoUrl === "string"
      );

      if (videoUrls.length < 4) {
        return {
          title: name,
          media: <VideoIcon />,
        };
      }

      const media = (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            width: "100%",
          }}
        >
          {videoUrls.map((videoUrl) => (
            <img
              style={{
                objectFit: "cover",
                width: "50%",
                height: "50%",
              }}
              key={videoUrl}
              src={toYouTubeThumbnailUrl(videoUrl)}
            />
          ))}
        </div>
      );

      return {
        title: name,
        media: media,
      };
    },
  },
};
