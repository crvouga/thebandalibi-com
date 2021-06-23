import { GetStaticProps } from "next";
import {
  Checkout,
  ICheckoutProps,
} from "../../components/commerce/pages/store.checkout";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<ICheckoutProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default Checkout;
