import { EventSingle, IEventSingleProps } from "@components/content/events";
import { content } from "@data-access";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<IEventSingleProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default EventSingle;
