import { content } from "@data-access";
import { GetServerSideProps, GetStaticProps } from "next";
import { EventSingle, IEventSingleProps } from "../../components/content/pages";

export const getStaticProps: GetStaticProps<IEventSingleProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default EventSingle;
