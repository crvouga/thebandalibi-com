import { GetStaticProps } from "next";
import { ErrorPage, IErrorPageProps } from "../components/app/error";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<IErrorPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default ErrorPage;
