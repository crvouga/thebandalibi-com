import { GetStaticProps } from "next";
import { ICalanderPageProps, CalanderPage } from "@components/content/calendar";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<ICalanderPageProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default CalanderPage;
