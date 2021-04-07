import { GetStaticProps } from "next";
import {
  INotFoundPageProps,
  NotFoundPage,
} from "../components/pages/not-found";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<INotFoundPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default NotFoundPage;
