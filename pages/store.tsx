import { GetStaticProps } from "next";
import { IStoreProps, Store } from "../components/pages/store";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<IStoreProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.products.getAll(),
    },
  };
};

export default Store;
