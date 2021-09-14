import { EventPage, IEventPageProps } from "@components/events";
import { content } from "@data-access";
import { events } from "data-access/events/bands-in-town";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<IEventPageProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      platform: await events.getPlatform(),
      upcomingEvents: await events.getAll({ date: "upcoming" }),
    },
    revalidate: 60,
  };
};

export default EventPage;
