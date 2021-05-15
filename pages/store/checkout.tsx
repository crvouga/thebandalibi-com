import { GetStaticProps } from "next";
import {
  Checkout,
  ICheckoutProps,
} from "../../components/shop/pages/store.checkout";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<ICheckoutProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default Checkout;
