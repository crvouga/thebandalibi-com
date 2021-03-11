import getYouTubeId from "get-youtube-id";

export const toYouTubeThumbnailUrl = (containsYouTubeId: string) => {
  const youTubeVideoId = getYouTubeId(containsYouTubeId);

  return `https://img.youtube.com/vi/${youTubeVideoId}/hqdefault.jpg`;
};
