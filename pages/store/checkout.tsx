import { GetStaticProps } from "next";
import {
  Checkout,
  ICheckoutProps,
} from "../../components/commerce/pages/store.checkout";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<ICheckoutProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
    },
  };
};

export default Checkout;
