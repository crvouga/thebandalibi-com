import { GetStaticProps } from "next";
import { INotFoundPageProps, NotFoundPage } from "../components/app/not-found";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<INotFoundPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default NotFoundPage;
