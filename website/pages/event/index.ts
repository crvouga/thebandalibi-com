import { GetStaticProps } from "next";
import { IEventProps, Event } from "@components/content/pages";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IEventProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default Event;
