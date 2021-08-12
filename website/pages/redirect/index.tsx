import { ROUTES } from "@config";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: ROUTES.landing(),
      permanent: true,
    },
  };
};

const RedirectPage = () => {
  return <></>;
};

export default RedirectPage;
