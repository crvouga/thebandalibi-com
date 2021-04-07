import { GetStaticProps } from "next";
import { ErrorPage, IErrorPageProps } from "../components/pages/error";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<IErrorPageProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default ErrorPage;
