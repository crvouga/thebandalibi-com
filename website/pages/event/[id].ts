import { content } from "@data-access";
import { GetServerSideProps } from "next";
import { EventSingle, IEventSingleProps } from "../../components/content/pages";

export const getServerSideProps: GetServerSideProps<IEventSingleProps> = async (
  context
) => {
  const eventId = context?.params?.id?.toString();

  if (!eventId) {
    return {
      notFound: true,
    };
  }

  const event = await content.event.getOne({ eventId });

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      settings: await content.settings.get(),
      event,
    },
  };
};

export default EventSingle;
