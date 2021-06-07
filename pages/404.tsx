import { GetStaticProps } from "next";
import {
  INotFoundPageProps,
  NotFoundPage,
} from "../components/app/pages/not-found";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<INotFoundPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default NotFoundPage;
