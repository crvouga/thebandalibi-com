import { GetStaticProps } from "next";
import { EventPage, IEventPageProps } from "@components/events";
import { content } from "@data-access";
import { events } from "data-access/events/bands-in-town";

export const getStaticProps: GetStaticProps<IEventPageProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      upcomingEvents: await events.getAll({ date: "upcoming" }),
    },
    revalidate: 60,
  };
};

export default EventPage;
