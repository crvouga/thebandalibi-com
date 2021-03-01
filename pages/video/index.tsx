import { GetStaticProps } from "next";
import { IVideoGalleryProps, VideoGallery } from "../../components/pages/video";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IVideoGalleryProps> = async () => {
  return {
    props: {
      tags: await store.tag.getAll(),
      settings: await store.settings.get(),
      initialVideos: await store.video.getAll(),
    },
  };
};

export default VideoGallery;
