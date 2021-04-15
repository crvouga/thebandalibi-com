import { GetStaticProps } from "next";
import { Checkout, ICheckoutProps } from "../../components/shop/store.checkout";
import { dataStore } from "../../lib/data-access";

export const getStaticProps: GetStaticProps<ICheckoutProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default Checkout;
